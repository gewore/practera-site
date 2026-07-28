# Practera — Landing Page

Single-page conversion site for Practera, an automated patient follow-up and
reputation system for dental and medical practices.

**Goal:** one action — book a free assessment via the embedded Cal.com calendar.

## Structure

```
index.html          Landing page (self-contained: HTML + CSS + JS)
privacy.html        Privacy Policy  — DRAFT, needs completion + legal review
terms.html          Terms of Service — DRAFT, needs completion + legal review
assets/logo.png     Practera mark
assets/founder.jpg  Founder headshot
.nojekyll           Tells GitHub Pages to serve files as-is
```

No build step. No dependencies. Open `index.html` in a browser and it runs.

## External dependencies

| What | Where from | Fails how |
|---|---|---|
| Inter typeface | Google Fonts | Falls back to system sans-serif |
| Booking calendar | Cal.com embed script | Falls back to plain iframe, then to a direct link |

## Booking

The calendar is embedded inline in the final section. Three CTA buttons
(header, hero, What's Included) scroll to it rather than navigating away.

Booking link: `mosalih/free-assessment`

To change it, update all four references:
- `calLink:` in the Cal init script
- `frame.src` in the fallback logic
- two `href="https://cal.com/..."` fallback links

## Before going live

- [ ] Complete every highlighted placeholder in `privacy.html` and `terms.html`
- [ ] Have a lawyer review Privacy §4 and §6, Terms §7, §11, §14
- [ ] Confirm the Cal.com embed loads on the live domain
- [ ] Add analytics and a post-booking thank-you page
- [ ] Replace the calculator's assumed 15-point lift with real data once available
- [ ] Add client testimonials above the founder section

## Notes

The page deliberately does **not** gate reviews. Every patient is invited on the
same terms. Screening patients by sentiment violates Google's review policies and
is covered by the FTC's 2024 rule on review suppression. Keep it that way.
