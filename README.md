# NYXIR – Micro SaaS Sales Engine Marketing Website

This repository contains the complete, production-ready marketing landing page for the **NYXIR** agency. It is built using **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- **SEO Optimized**: Fully populated with metadata, keywords, and description for keywords like `"micro saas sales engine"`, `"interactive lead magnet for agencies"`, and `"B2B micro saas funnel"`.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with a maximum viewport of `1200px`.
- **Animated Aesthetics**: Includes a smooth shifting color-gradient hero background and micro-interaction animations.
- **Centralized Links**: All primary CTAs and email linkages are configured in a single file for easy updates.
- **Interactive FAQ Accordion**: Built with react state transitions for smooth toggling of FAQ content.

---

## 🛠️ Project Structure

```
NYRIX/
├── src/
│   ├── app/
│   │   ├── globals.css      # Core styles & custom animations
│   │   ├── layout.tsx       # Google Fonts (Manrope) & SEO tags
│   │   └── page.tsx         # Responsive landing page structure
│   └── config/
│       └── links.ts         # Central CTA and email settings
├── tailwind.config.ts       # Tailored color system & keyframes
├── package.json
└── tsconfig.json
```

---

## ⚙️ Getting Started

### 1. Install Dependencies
In the root directory, run:
```bash
npm install
```

### 2. Configure Your Links
Open `src/config/links.ts` and set your CTA URLs:
```typescript
export const LINKS = {
  primaryCta: "https://calendly.com/your-calendly-link", 
  email: "mailto:your-agency-email@domain.com",          
};
```

### 3. Run Locally
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production
Verify production compilation before deploying:
```bash
npm run build
```

---

## ☁️ Vercel Deployment

Deploy in under a minute:
1. Push this codebase to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository into [Vercel](https://vercel.com/new).
3. Click **Deploy**. Vercel will automatically auto-detect Next.js and build it.
4. Go to **Settings > Domains** in Vercel to attach your custom domain.
