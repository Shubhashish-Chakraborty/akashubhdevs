# 🚀 Your Portfolio — Next.js + TypeScript

A next-gen developer portfolio with a **particle face effect**, animated star background, and immersive dark space UI.

---

## ✨ Features

- **🎇 Particle Face** — Your photo rendered as thousands of particles. Hover to repel them, click to scatter and reassemble.
- **🌌 Star Background** — Full-screen animated star field with twinkling stars, nebula clouds, and shooting stars.
- **⚡ Typewriter Hero** — Animated role cycling with spring physics.
- **🃏 Glow Cards** — Mouse-follow radial glow on project cards.
- **📜 Scroll Animations** — Every section animates in with Framer Motion.
- **🌗 Modern Dark UI** — Deep space color palette with purple/cyan accents and glassmorphism.

---

## 🛠 Setup

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Add your photo

Place your profile photo at:
```
public/me.png
```

**Tips for best particle effect:**
- Use a photo with **good contrast** and a **light/plain background** (or white background).
- Recommended size: **500×500px minimum**, square crop.
- The effect works best with a clear face against a contrasting background.
- If no photo is provided, an animated colorful orb is shown as fallback.

### 3. Customize your content

Edit these files to personalize:

| File | What to change |
|------|---------------|
| `src/app/layout.tsx` | Page title & meta description |
| `src/components/Hero.tsx` | Your name, roles, bio tagline, social links |
| `src/components/About.tsx` | Your bio, stats, timeline |
| `src/components/Projects.tsx` | Your projects (title, description, tech, links) |
| `src/components/Skills.tsx` | Your skills and tech stack |
| `src/components/Contact.tsx` | Your contact info and social handles |
| `src/components/Nav.tsx` | Your logo text |
| `src/components/Footer.tsx` | Footer branding |

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔌 Form Integration

The contact form is set up to simulate a submission. To wire it up for real, replace the `handleSubmit` function in `Contact.tsx` with your preferred service:

**Formspree (easiest):**
```typescript
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
});
```

**Resend / Nodemailer:** Create an API route at `src/app/api/contact/route.ts`.

---

## 🎨 Theming

The color palette is defined in `src/app/globals.css`:

```css
--accent-purple: #7928ca;   /* Main purple */
--accent-cyan: #00d4ff;     /* Cyan accent */
--accent-pink: #ff0080;     /* Pink highlight */
--bg-primary: #030014;      /* Deep space black */
```

Swap these to completely change the vibe!

---

## 📦 Deploy

```bash
npm run build
```

Works out of the box on **Vercel**, **Netlify**, or any Node.js host.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🔧 Particle Face Tuning

In `src/components/ParticleFace.tsx`, you can tweak:

```typescript
const gap = 5;            // Pixel sampling gap (smaller = more particles, heavier)
const MOUSE_RADIUS = 90;  // How far the cursor repels particles (px)
this.ease = 0.035–0.075;  // How fast particles spring back (higher = faster)
this.size = 0.6–2.0;      // Particle size range
```

---

Built with Next.js · TypeScript · Framer Motion · Tailwind CSS · Canvas API
