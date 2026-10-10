# Karthikeyan S - Developer Portfolio

Personal portfolio of Karthikeyan S, a final-year B.E. Computer Science student from Salem, Tamil Nadu.
Live site: https://s-karthikeyan-portfolio.vercel.app/

## Stack

- Next.js 15 (App Router) and React 19, exported as a static site (`output: "export"`, build output in `out/`)
- TypeScript and Tailwind CSS 3, with design tokens in `tailwind.config.ts`
- GSAP and ScrollTrigger as the only animation system (`components/site-motion.tsx`)
- Radix Dialog for the mobile menu, certificate viewer and project case studies
- Self-hosted Inter and Space Grotesk (`@fontsource-variable`), no render-blocking font requests

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build, writes the static site to out/
npm run serve    # serve out/ locally
```

## Where to edit content

- `lib/data.ts` holds all text: profile, CGPA, stats, skills, projects, certificates and education.
- `public/resume/KARTHIKEYAN_S_RESUME.pdf` is the file behind "Download résumé". Replace it with your latest PDF using the same file name and no code changes are needed.
- `public/og.png` is the 1200x630 social preview image.
- `public/images/` holds project images. Use real screenshots or photos of your own work.

## Accessibility and motion

- Skip link, visible focus rings, keyboard-operable menu and dialogs.
- Animations only run when the visitor has not asked for reduced motion. Content stays visible without JavaScript animation.
- Decorative motion uses `transform` and `opacity` only, and every tween and listener is cleaned up when the page unmounts.
