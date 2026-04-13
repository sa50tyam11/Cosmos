# COSMOS Agency

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js)

Welcome to the **COSMOS Agency** repository. This is a high-end, premium digital agency landing page built with a dark-mode-first, cinematic design philosophy. It leverages modern web technologies to deliver an ultra-smooth, deeply interactive, and visually stunning user experience.

---

## ✦ Overview

COSMOS is designed to showcase an authority-driven digital agency. The website is engineered to feel less like a traditional webpage and more like a high-production interactive presentation. 

With deep, rich black backgrounds, intense radial glows, smooth global scrolling physics, and staggered text-reveal micro-animations, this codebase serves as a blueprint for top-tier agency portfolios aiming for a "$100k valuation" aesthetic.

## ✦ Key Features

- **Cinematic Visual Identity**: A strict, pure-black theme (`#000000`) paired with vibrant accent glows to create an immersive environment.
- **Advanced Animations**: Powered by both `framer-motion` and `gsap`, featuring scroll-linked parallax, staggered text reveals, and complex micro-interactions.
- **Fluid Smooth Scrolling**: Integrated `@studio-freight/lenis` for buttery smooth global page scrolling without native scrollbar jut.
- **3D & WebGL Capabilities**: Implements `three.js` to render performant and interactive canvas elements (like dynamic globes, aether hero sections, or interactive shaders).
- **Responsive Architecture**: Fully scalable from ultra-wide 4K desktop displays down to precise, finger-friendly mobile interfaces, utilizing Tailwind CSS for fluid typography and spacing.
- **Modular Component Design**: Cleanly separated React components handling distinct narrative sections: Hero, Services, Process Highlights, Works, Social Proof, and more.

## ✦ Technology Stack

| Technology | Purpose |
| ---------- | ------- |
| **Next.js 14** | Core framework, App Router, SSR, Server Components |
| **React 18** | UI Library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Atomic, utility-first CSS styling and custom design tokens |
| **Framer Motion** | Declarative layout animations and scroll effects |
| **GSAP** | High-performance, complex timeline animations |
| **Three.js** | 3D rendering context and WebGL visual effects |
| **Lenis** | Custom smooth scroll engine |
| **Lucide React** | Consistent, professional scalable vector icons |

## ✦ Project Structure

```text
soft-campus-agency/
├── public/                 # Static assets (images, fonts, videos)
├── src/
│   ├── app/                # Next.js App Router (page.tsx, layout.tsx, globals.css)
│   ├── components/         # Modular React building blocks
│   │   ├── Hero.tsx
│   │   ├── ServicesRail.tsx
│   │   ├── ProcessHighlights.tsx
│   │   ├── AboutSection.tsx
│   │   ├── WorksPreview.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── ContactCTA.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/                # Shared utilities, hooks, and configuration
├── tailwind.config.ts      # UI styling rules and design system tokens
└── next.config.mjs         # Next.js configuration
```

## ✦ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm`, `yarn`, `pnpm`, or `bun` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/soft-campus-agency.git
   cd soft-campus-agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser. The page will hot-reload as you make changes to `src/app/page.tsx` or any components.

## ✦ Extending the Project

- **Animations**: To tweak entrance animations, locate the specific element in `src/components/` and adjust the `framer-motion` variants or `GSAP` hooks inside the `useEffect`.
- **Styling**: Update global color palette and theme variables in `tailwind.config.ts` or `globals.css`. The dark-mode configuration uses standard `next-themes`.
- **Canvas / 3D**: `Three.js` logic typically runs in separate overlay components within the hero or background to ensure the main DOM remains interactive.

## ✦ Format & Lint

Ensure code quality before committing by running:
```bash
npm run lint
```

## ✦ License

This project is licensed under the MIT License - see the LICENSE file for details.
