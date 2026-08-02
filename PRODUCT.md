# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (single-page landing site with embedded Cal.com booking and client-side interaction scripts)

## Users

Primary users are dental and medical practice owners, managers, or decision-makers in Canada who evaluate patient communication and review automation services for their clinic.

## Product Purpose

Practera turns unanswered practice calls into booked opportunities, reactivates dormant patients, and asks every patient for a review through a managed, done-for-you service delivered from a single landing page.

## Positioning

A managed patient contact system for practices that combines phone answering, review requests, reactivation messaging, and booking in one service while preserving existing practice systems and avoiding review gating or patient data resale.

## Operating Context

- Visitors arrive on a static marketing landing page and can either request a walkthrough or book a 30-minute call.
- The page supports quick decision-making with claims, comparison tables, pricing, FAQ, and a Cal.com booking embed.
- The audience is likely evaluating a service during business research on desktop or mobile.

## Capabilities and Constraints

- The site is a self-contained static web page with no build step.
- Booking is handled by an embedded Cal.com calendar with a fallback iframe and direct link.
- The service emphasizes no minimum term, month-to-month pricing, and a one-time setup fee.
- Review requests are framed as sent to every patient without screening, with privacy and BAA commitments.
- No product-specific accessibility requirements are documented beyond standard web expectations.

## Brand Commitments

- The product uses the name Practera and is positioned for dental and medical practices across Canada.
- It is presented as managed by a founder/founder-led team based in Windsor, Ontario.
- The landing page must preserve the claim that the service is set up, written, and managed for the practice, not merely a software tool.

## Evidence on Hand

- `index.html`: full landing page implementation, marketing copy, interactive calculator, Cal.com embed, FAQ, and contact form.
- `README.md`: confirms the project is a static landing page with no dependencies and outlines booking link details.
- `assets/logo.png`, `assets/founder.jpg`: brand and founder imagery referenced by the page.

## Product Principles

- Make it easy for practice decision-makers to understand the revenue and reputation impact of unanswered calls.
- Keep the experience focused on the walk-through and call booking path, with honest, compliant claims.
- Preserve the existing static web delivery model and avoid adding unnecessary implementation complexity.
