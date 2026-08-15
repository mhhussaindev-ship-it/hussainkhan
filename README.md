# M. Hussain Khan — Developer Portfolio

A dark-mode developer portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**, inspired by a dark-mode portfolio Figma design, personalized with real content:

- Hero, About, Skills, **Boring Business** (family business — Khan Boring Service), Projects, Contact
- Smooth scroll-triggered animations (Framer Motion)
- Fully responsive, mobile-friendly navbar with hamburger menu
- Animated skill progress bars
- WhatsApp + email + phone contact section

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Before deploying — personalize these
- Replace the "Your Photo" placeholder in `src/components/Hero.tsx` with your real photo:
  1. Put your photo at `public/images/profile.jpg`
  2. In `Hero.tsx`, replace the placeholder `<div>` with:
     ```tsx
     import Image from "next/image";
     <Image src="/images/profile.jpg" alt="M. Hussain Khan" fill className="object-cover rounded-full" />
     ```
- Update social links (GitHub, LinkedIn, Instagram) in `Hero.tsx` and `Footer.tsx` — currently `href="#"` placeholders
- Update Education details in `About.tsx`
- Add/replace real projects and screenshots in `Projects.tsx`
- Add real project screenshot backgrounds instead of the gradient placeholder blocks

## Build check
```bash
npm run build
```

## Deploy to Vercel (free)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
Then go to vercel.com → Add New Project → import the repo → Deploy. No config needed.
