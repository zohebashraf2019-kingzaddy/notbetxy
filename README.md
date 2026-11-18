# NOTBETXY — Betxy w/ an X

Personal brand and influencer collaboration website for **@notbetxy**.
Built with Next.js (App Router), Tailwind CSS and Framer Motion. Deploys on Vercel.

> More Than Influence. It's About Connection.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## Deploy (GitHub + Vercel)

```bash
git init && git add . && git commit -m "NOTBETXY website"
git branch -M main
git remote add origin https://github.com/<account>/notbetxy.git
git push -u origin main
```

Import the repo in Vercel (framework: Next.js, no build settings needed), then add these environment variables under **Settings → Environment Variables**:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Live URL, e.g. `https://notbetxy.com` (SEO, canonical, Open Graph) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional public business email shown on the site |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `INQUIRY_TO_EMAIL` | Inbox that receives inquiries (comma-separate for several) |
| `INQUIRY_FROM_EMAIL` | Verified sender, e.g. `NOTBETXY Inquiries <inquiries@notbetxy.com>` |

Redeploy after adding variables. Until the three Resend variables are set, the form shows an error (and points visitors to Instagram DMs). It never shows the success message unless the email actually sent.

**Custom domain:** Vercel → Project → Settings → Domains → add the domain, then update `NEXT_PUBLIC_SITE_URL`. Verify the same domain in Resend so the sender address works.

## Editing content

| What | Where |
|---|---|
| Text, socials, follower snapshot, media kit PDF | `content/site.ts` |
| Portfolio (The Collaboration Edit) and Instagram embeds | `content/collaborations.ts` |
| Photos, gallery order, self-hosted Reels | `content/media.ts` + `public/images`, `public/video` |
| Privacy policy | `app/privacy/page.tsx` |

### Add a collaboration
1. Put the image in `public/images/collabs/`.
2. Add an entry to `collaborations` in `content/collaborations.ts` (`placeholder: false`, `postUrl` set to the Instagram post).
3. Delete a placeholder card if you want, then commit and push.

### Add Reels
- **Instagram embed:** paste reel URLs into `featuredReels` in `content/collaborations.ts`.
- **Self-hosted clip:** drop the `.mp4` in `public/video/` (no audio, under about 2 MB) and add it to `hostedReels` in `content/media.ts`.

### Media kit PDF
Put `media-kit.pdf` in `/public` and set `mediaKitPdf: "/media-kit.pdf"` in `content/site.ts`. A Download button then appears beside "Request Media Kit".

## Before launch
- [ ] Check every social URL in `content/site.ts`
- [ ] Update the follower snapshot and its date
- [ ] Set up Resend and send a test inquiry
- [ ] Replace the placeholder portfolio cards with real, approved collaborations
- [ ] Have Betxy approve the photos and copy

## Integrity rules
Don't add engagement rates, demographics, impressions, rates, testimonials or past partnerships unless Betxy supplies and approves them.

---
© 2026 NOTBETXY. Website designed & managed by [Nexora Digital LLC](https://www.nexoradigital.live).
