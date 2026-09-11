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
