# SlideSpeak Section

![project status](https://img.shields.io/badge/project_status-active-success?style=for-the-badge)
[![live site](https://img.shields.io/badge/live_site-blue?style=for-the-badge)](https://slidespeak-section.vercel.app/)
[![Lighthouse report](https://img.shields.io/badge/lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=fff)](https://googlechrome.github.io/lighthouse/viewer/?gist=db84d013681f5b216cfc0898db3da6b0)

## Overview

This project implements a business landing page section for [SlideSpeak](https://slidespeak.co/), built from a provided Figma design as part of an assessment.

## Tech Stack

### Frontend

- **UI library**: [React 19](https://react.dev/)
- **Framework**: [Next.js 16](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)

### Backend

- **CDN**: [Vercel](https://vercel.com/docs/cdn)

### Quality Assurance

- **Unit testing**: [Vitest](https://vitest.dev/)
- **End-to-end testing**: [Playwright](https://playwright.dev/)

## How to Update

To check for outdated packages, run `npm outdated`.

```bash
# Update dependencies (this will rewrite package-lock.json and package.json)
npm update --save
npm install --save-exact --save-dev prettier@latest prettier-plugin-tailwindcss@latest
```

## Notes

- The GitHub Action `actions/setup-node@v6` relies on both `package.json` `engines` and `devEngines` to set the Node.js version and automatically cache npm dependencies.

## Dev Environment & Tools

- **System**: [Ubuntu](https://ubuntu.com/desktop)
- **Editor**: [VS Code](https://code.visualstudio.com/)
- **Formatter**: [Prettier](https://prettier.io/)
- **Linter**: [ESLint](https://eslint.org/)
- **AI assistant**: [GitHub Copilot](https://github.com/features/copilot)

## Copyright

© 2025–2026 Johnny Gérard
