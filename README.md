# Mannan -- 3D Creator

A dark-themed, animation-heavy portfolio site built with React, TypeScript, Tailwind CSS, Framer Motion, and React Router.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

If you deploy to Netlify or Vercel, the SPA fallback config is already included (`public/_redirects` and `vercel.json`), so direct loads of `/price`, `/projects`, or `/contact` won't 404. Other static hosts will need an equivalent "serve index.html for any path" rule.

## Pages

The site is a multi-page app (React Router), not a single scrolling page:

| Route       | Content                                   |
| ----------- | ------------------------------------------ |
| `/`         | Hero, Marquee, About                       |
| `/price`    | Services / pricing                         |
| `/projects` | Testimonials, then the 3 stacking project cards |
| `/contact`  | Contact form + direct contact info          |

Testimonials sit at the top of the Projects page -- so the "About → Price → Testimonials → Projects" flow still reads in order as you move through the nav, even though Price and Projects are now separate pages rather than scroll anchors.

The nav bar ("About", "Price", "Projects", "Contact") is shared across every page (`src/components/Navbar.tsx`), sticky at the top. "About" jumps to the About section on the home page (`/#about`); the other three are real routes. There's a matching `Footer` on every page too.

## Project structure

```
src/
  components/    Reusable pieces: Navbar, Footer, FadeIn, Magnet, ContactButton,
                 LiveProjectButton, AnimatedText
  pages/         One file per route: HomePage, PricePage, ProjectsPage, ContactPage
  sections/      One file per content section, composed into pages:
                 HeroSection, MarqueeSection, AboutSection, ServicesSection,
                 TestimonialsSection, ProjectsSection, ContactSection
  data/          Editable content: marqueeImages.ts, services.ts, projects.ts,
                 testimonials.ts
  index.css      Global resets, background, Kanit font, .hero-heading gradient class
  App.tsx        Router setup, layout, scroll handling, page-fade transitions
```

## Where to edit things

- **Name / branding** -- "Mannan" appears in `Navbar.tsx`, `Footer.tsx`, `HeroSection.tsx` (the big heading), and `index.html` (page title). Search for "Mannan" to find every spot.
- **Copy / headline text** -- directly inside each file in `src/sections/`.
- **Services list** -- `src/data/services.ts` (number, name, description).
- **Testimonials** -- `src/data/testimonials.ts` (name, role, quote, avatar, star rating). Avatars currently use placeholder images from `i.pravatar.cc` -- swap in real client photos when you have them.
- **Projects** -- `src/data/projects.ts` (name, category, and the three image URLs per project). Add a `liveUrl` to any project to make its "Live Project" button link out.
- **Marquee GIFs** -- `src/data/marqueeImages.ts`. Row 1 is the first 11 images, Row 2 is the rest; each row is auto-tripled for seamless looping.
- **Contact form** -- `src/sections/ContactSection.tsx`. The form currently only shows a local "message received" confirmation; it isn't wired to send anything anywhere yet. Swap the `handleSubmit` function for a real request to a service like Formspree or EmailJS, or your own API route, when you're ready to receive submissions. The email address and social links live at the top of the same file (and in `Footer.tsx`).
- **Colors** -- the core palette (`#0C0C0C` background, `#D7E2EA` text, gradient stops) is used inline via Tailwind arbitrary values and in `src/index.css`. Search for the hex codes to change them everywhere at once.
- **Fonts** -- Kanit is loaded from Google Fonts in `index.html` and set as the default in `tailwind.config.js`.

## Notes

- All images (portrait, decorative 3D renders, marquee GIFs, project shots, testimonial avatars) are loaded from remote URLs, so an internet connection is needed to see them. Swap any `src`/URL in the `data/` files or section files to use your own hosted images instead.
- Motion respects `prefers-reduced-motion` at the CSS level; Framer Motion's viewport-triggered fades still run once per element but keep transitions instant for users who've requested reduced motion.
- Page changes fade in/out via Framer Motion's `AnimatePresence` in `App.tsx`, and the page scrolls to top (or to the right in-page anchor) on every route change.
