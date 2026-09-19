# Global Exam Support project context

## Repository identity

- GitHub repository: `MCYJ/global-exam-support`
- Default branch: `main`
- GitHub Pages base URL: `https://mcyj.github.io/global-exam-support/`
- Purpose: shared public privacy, support, and terms pages for RushLabs exam-preparation apps.

## Implementation conventions

- Preserve the existing static HTML, shared `styles.css`, and shared `site.js` structure.
- App-specific public URLs use the `app` query parameter.
- `site.js` accepts only lowercase ASCII letters, digits, and hyphens, with a maximum length of 40 characters, and writes the accepted value with `textContent`.
- Never place passwords, tokens, payment details, private documents, or other secrets in this repository.
- Do not delete or replace existing privacy, support, or service pages.

## Terms page deployment task - 2026-09-11

- Target: `https://mcyj.github.io/global-exam-support/terms.html?app=glb-0003`
- Required live result: HTTP 200 and page title `Terms of Use · RushLabs Exam Prep`.
- Content scope: platform subscription terms, billing, cancellation, restoration, independent-app non-affiliation, educational-purpose limits, liability limits, and support contact.
- Source changes: add `terms.html`, add a Terms card to `index.html`, and retain the existing privacy/support design and behavior.
- Deployment verification details are recorded in `deployment-evidence.json` after the live GitHub Pages check.
- Content commit: `979ca6a3fb0780ec70469d5a0c1caa4b1e6327ea`.
- GitHub Pages deployment run: `https://github.com/MCYJ/global-exam-support/actions/runs/34589181649` (success).
- Live verification at `2026-09-11T10:26:42Z`: HTTP 200 with title `Terms of Use · RushLabs Exam Prep`.

## GLB-0686 app-specific legal deployment - 2026-09-17

- Added isolated static pages under glb-0686/ for privacy, support and terms plus their local stylesheet. Existing shared and GLB-0655 pages were preserved.
- Content commit 9d3f9f002866f7bbeeca91d3f33ceddb0e973ae6 completed GitHub Pages build 1220882510. All four public resources returned HTTP 200 over HTTPS and their response bodies matched the committed source SHA-256 values byte for byte.
- The pages describe the current Finnish-only 180-question S1/S2/S3 local runtime, no account, ads, payments, subscriptions, analytics or telemetry, local-only study data with an operating-system backup caveat, and independent non-affiliation.
- Deployment evidence is glb-0686/deployment-evidence.json.

## App Review support remediation - 2026-09-20

- `support.html?app=<serviceId>` now exposes a direct, working RushLabs support
  email in visible text and as a `mailto:` action instead of depending on a
  GitHub issue form.
- The accepted app reference is displayed on the page and inserted into the
  email subject so App Review and customers can identify the affected app.
- The page requests only useful diagnostic details, warns against sending
  payment or private data, and states a two-business-day acknowledgement goal.
