<div align="center">
  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" alt="Nexlink Studio Cover" width="100%" />

  <br />
  <br />

  <h1 align="center">Nexlink Studio</h1>

  <p align="center">
    <strong>A high-performance, productized digital studio built with Next.js 15.</strong><br/>
    Elevating brands through strategic design, proven conversions, and cinematic web experiences.
  </p>

  <p align="center">
    <a href="#about">About</a> &nbsp;&middot;&nbsp; 
    <a href="#features">Features</a> &nbsp;&middot;&nbsp; 
    <a href="#tech-stack">Tech Stack</a> &nbsp;&middot;&nbsp; 
    <a href="#getting-started">Getting Started</a>
  </p>
</div>

<br />

## 🚀 About

**Nexlink Studio** is a productized digital agency platform designed to streamline the web development process for small-to-medium businesses. Moving away from the slow, traditional agency model, Nexlink provides ready-to-deploy, high-converting templates enriched with cinematic animations, physics-based interactions, and a premium user experience.

The site itself acts as a living demonstration of the product quality clients can expect.

## ✨ Key Features

- **Cinematic Page Transitions:** A custom context-based router (`TransitionProvider`) that intercepts navigation, firing a 4-phase cinematic load sequence masking the standard Next.js route push.
- **Physics-Based UI:** Features custom interactive elements, such as the *Steamy Physics* footer—a droplet simulation over a blurred glass pane running directly in the DOM.
- **Dual-Theme Fluidity:** Flawless light and dark mode toggling using `next-themes`, ensuring deep `#3419e0` purples pop perfectly against both stark whites and deep blacks.
- **Productized Flow:** Carefully architected funnels traversing through a Design Library, 3-step Process timeline, tiered Pricing, and a heavily optimized Contact integration.
- **Rich Content Ecosystem:** Built-out sections for Documentation, Blog, Integrations, Community, and granular legal pages (Terms & Privacy).
- **Custom Theming:** Unique Webkit & Firefox custom scrollbars to maintain immersion without visual breakage.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Typing:** TypeScript 5+
- **Styling:** Tailwind CSS v4, Vanilla CSS
- **Icons:** Iconify (`@iconify/react`)
- **State/Context:** React Context API
- **Deployment & Hosting:** Vercel

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router endpoints (Pages)
│   ├── blog/             # Blog & Articles
│   ├── changelog/        # Version History
│   ├── community/        # Community Hub
│   ├── contact/          # Client Acquisition Forms
│   ├── designs/          # Product Library
│   ├── docs/             # Knowledge Base
│   ├── integrations/     # Partner Tools
│   ├── pricing/          # Tiered Product Offerings
│   ├── process/          # Workflow Breakdown
│   ├── terms/ & privacy/ # Legal Info
│   ├── layout.tsx        # Root Transition Provider
│   └── globals.css       # Theming variables & custom scrollbars
├── components/
│   ├── layout/           # Navbar, Footer, Background elements
│   ├── sections/         # Homepage sections (Hero, About, Features...)
│   └── ui/               # Reusable primitives (TransitionLink, ThemeSwitcher...)
└── hooks/                # Custom React hooks (e.g., useSteamyPhysics)
```

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build Issues & Turbopack 
If you encounter SWC Win32 binary errors in a OneDrive environment on Windows, you can force Webpack compilation using:
```bash
npx next build --webpack
```

## 🎨 Design System

- **Primary Color:** Deep Purple (`#3419e0`)
- **Typography:** Inter (Sans-serif)
- **Aesthetic:** Clean layout, heavy use of glassmorphism (blurs), micro-interactions on hover, and high-contrast dark mode.

---

<div align="center">
  <sub>A product of <a href="https://www.nexlinksolutionsza.co.za" target="_blank">Nexlink Solutions</a></sub><br/>
  <sub>© 2026 Nexlink Studio. All rights reserved.</sub>
</div>
