# RAITON Website — Project Instructions

## Project

This repository contains the corporate website for:

RAITON L.L.C-FZ
Dubai, United Arab Emirates.

Before making meaningful product, design, copy, or architecture decisions:

1. Read `/client/brief.md`.
2. Inspect `/references`.
3. Treat the screenshots as art-direction references, not designs to copy.

Never invent facts about RAITON.

If business information is missing, either omit it or clearly leave a TODO.

---

## Primary Goal

Build a premium corporate website that feels like the work of a professional human design studio.

RAITON operates in:

- General Trading
- Offshore Crude Oil Trading
- Logistics Services

The desired impression is:

- established
- international
- restrained
- credible
- industrial
- sophisticated
- premium

This must NOT look like a generic AI-generated landing page.

---

## Art Direction

Use the references approximately in this priority:

1. Trafigura — primary reference
2. Vitol
3. Gunvor
4. Ennero

Study:

- typography
- whitespace
- proportions
- image treatment
- information hierarchy
- navigation
- editorial composition
- visual rhythm

Do not reproduce their layouts verbatim.

Do not copy logos, illustrations, photos, videos, or other proprietary assets from reference websites.

---

## Anti-AI Design Rules

Avoid stereotypical generated website patterns.

Do not use:

- purple/blue AI gradients
- glassmorphism
- glowing blobs
- excessive rounded cards
- excessive shadows
- generic SaaS layouts
- feature-card grids everywhere
- unnecessary icon cards
- fake dashboards
- fake statistics
- fake customer logos
- fake testimonials
- fake awards
- fake partnerships
- generic corporate stock photos of handshakes and meetings

Do not solve every design problem with a rounded rectangle.

Prefer:

- editorial layouts
- strong typography
- large imagery
- intentional whitespace
- clear hierarchy
- restrained geometry
- subtle dividers
- asymmetry where appropriate
- strong vertical rhythm

---

## Copywriting

Copy must be concise, factual, professional, and restrained.

Never invent:

- company history
- founding dates
- trading volumes
- employee counts
- customers
- partners
- licenses
- certifications
- geographic coverage
- owned ships
- owned warehouses
- owned trucks
- owned terminals

Avoid AI/corporate filler such as:

- "innovative solutions"
- "world-class"
- "unparalleled excellence"
- "empowering businesses"
- "tailored to your unique needs"
- "your trusted partner"
- "cutting-edge solutions"

unless specifically justified by supplied information.

Specific language is preferred over marketing language.

---

## Photography

Use industrial and documentary-style imagery relating to:

- crude oil
- ports
- maritime logistics
- container terminals
- industrial equipment
- construction materials
- international trade infrastructure

Images must not imply RAITON owns infrastructure unless this is explicitly stated by the client.

Treat them as contextual industry imagery.

Avoid obviously AI-generated imagery when suitable real photography is available.

---

## Visual System

The visual system should generally use:

- warm off-white / stone
- near-black / charcoal
- one restrained industrial accent

Possible accent directions:

- petroleum
- bronze
- muted mineral/metal tones

Do not overuse the accent.

Typography should be a professional contemporary grotesk or neo-grotesk.

Do NOT default to Inter without considering better alternatives.

Typography should carry much of the design.

---

## Frontend

Preferred stack unless there is a good technical reason otherwise:

- Next.js
- TypeScript
- App Router
- Tailwind CSS

Keep dependencies minimal.

Do not add a large UI component framework unless it provides a clear benefit.

Use:

- semantic HTML
- responsive images
- accessible navigation
- correct focus states
- keyboard support
- good metadata
- sensible SEO
- performant implementation

Avoid unnecessary client-side JavaScript.

---

## Responsive Design

Mobile must be intentionally designed rather than simply stacking desktop blocks.

Always inspect:

- desktop
- tablet
- mobile

Pay particular attention to:

- typography
- hero cropping
- navigation
- spacing
- image composition
- contact information

---

## Figma

If the Figma plugin/integration is available, use it when it materially improves the design workflow.

Use Figma for visual exploration and validation rather than as decoration.

Do not block implementation solely because Figma is unavailable.

---

## Visual QA

Visual quality is part of task completion.

For substantial UI work:

1. Run the site.
2. Inspect the result in a browser.
3. Check desktop.
4. Check mobile.
5. Look for visual inconsistencies.
6. Look specifically for generic AI-design patterns.
7. Improve them before declaring the task complete.

A successful compile is not sufficient.

---

## AI-Smell Review

Before completing major page work, review:

- Does this resemble a generic AI landing page?
- Are there too many cards?
- Is the page excessively symmetrical?
- Do too many sections use the same layout?
- Is there generic marketing copy?
- Is typography doing enough work?
- Is photography coherent?
- Is whitespace intentional?
- Are there decorative elements without purpose?
- Does the site have a recognizable art direction?

Fix issues found during this review.

---

## Engineering Quality

Before finishing substantial implementation work, run the relevant available checks, ideally:

- lint
- typecheck
- build

Fix errors caused by the changes.

Do not modify unrelated files merely to make checks pass.

---

## Git

Keep changes focused.

Do not rewrite Git history.

Do not force-push.

Do not commit secrets or credentials.

Do not make unrelated refactors while implementing a design task.

Use clear commit messages when commits are requested.
