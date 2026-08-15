import express from 'express';
import cors from 'cors';

const {
  RETELL_API_KEY,
  RETELL_AGENT_ID,
  ALLOWED_ORIGIN = '*',
  MAX_CALLS_PER_IP_PER_DAY = '2',
  MAX_CALL_DURATION_SECONDS = '90',
  PORT = '8420',
} = process.env;

const maxCallsPerIpPerDay = parseInt(MAX_CALLS_PER_IP_PER_DAY, 10);
const maxCallDurationSeconds = parseInt(MAX_CALL_DURATION_SECONDS, 10);

const app = express();
app.use(express.json());
app.use(cors({ origin: ALLOWED_ORIGIN }));

// In-memory rate limit: ip -> array of call timestamps (ms).
// Resets on restart and isn't shared across replicas. Fine for a single
// Coolify instance; move to Redis if this ever needs to scale horizontally.
const callLog = new Map();
const DAY_MS = 24 * 60 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (callLog.get(ip) || []).filter((t) => now - t < DAY_MS);
  callLog.set(ip, recent);
  return recent.length >= maxCallsPerIpPerDay;
}

function recordCall(ip) {
  const recent = callLog.get(ip) || [];
  recent.push(Date.now());
  callLog.set(ip, recent);
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.socket.remoteAddress;
}

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/create-web-call', async (req, res) => {
  if (!RETELL_API_KEY || !RETELL_AGENT_ID) {
    return res.status(503).json({ error: 'Voice demo is not configured yet.' });
  }

  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "You've reached today's limit for the demo. Book a call and we'll show you live instead.",
    });
  }

  try {
    const retellRes = await fetch('https://api.retellai.com/v2/create-web-call', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RETELL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        agent_id: RETELL_AGENT_ID,
        metadata: { source: 'practera-site-demo-widget' },
        retell_llm_dynamic_variables: {
          demo_time_notice:
            "This call is capped at about ninety seconds. Right after your introduction, before the caller responds, say: \"Quick heads up, this demo runs about ninety seconds, so I'll keep us moving!\" Then pace the conversation so you reach a natural, warm close by around the 60 to 70 second mark rather than opening new topics.",
        },
      }),
    });

    if (!retellRes.ok) {
      const detail = await retellRes.text();
      console.error('Retell create-web-call failed:', retellRes.status, detail);
      return res.status(502).json({ error: 'Could not start the demo call. Please try again shortly.' });
    }

    const data = await retellRes.json();
    recordCall(ip);

    res.json({
      access_token: data.access_token,
      call_id: data.call_id,
      max_duration_seconds: maxCallDurationSeconds,
    });
  } catch (err) {
    console.error('create-web-call error:', err);
    res.status(500).json({ error: 'Something went wrong starting the demo call.' });
  }
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Voice agent server listening on :${PORT}`);
  if (!RETELL_API_KEY || !RETELL_AGENT_ID) {
    console.warn('RETELL_API_KEY / RETELL_AGENT_ID not set — /api/create-web-call will return 503 until configured.');
  }
});
