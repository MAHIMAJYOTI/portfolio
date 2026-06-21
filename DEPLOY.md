# Deploy portfolio + custom domain

Resume downloads are **off** on the live site until PDFs are finalized. Turn them back on later in `src/data/portfolio.ts` → `showResumeDownloads: true`.

---

## Step 1 — Push to GitHub

From the portfolio folder:

```powershell
cd C:\Users\mahij\OneDrive\Desktop\portfolio

git add .
git commit -m "Portfolio site ready for deploy"
```

Create a **new public repo** on GitHub named `portfolio` (or `mahimajyoti.dev`), then:

```powershell
git remote add origin https://github.com/MAHIMAJYOTI/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) → sign in with **GitHub**
2. **Add New Project** → import `MAHIMAJYOTI/portfolio`
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

You get a URL like `portfolio-xxx.vercel.app` in ~2 minutes.

CLI alternative (after `npx vercel login`):

```powershell
cd C:\Users\mahij\OneDrive\Desktop\portfolio
npx vercel --prod
```

---

## Step 3 — Custom domain

### Option A — Buy a `.dev` domain (recommended)

1. Buy e.g. `mahimajyoti.dev` on [Namecheap](https://namecheap.com), [Google Domains / Squarespace](https://domains.google), or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
2. In **Vercel** → your project → **Settings → Domains**
3. Add `mahimajyoti.dev` and `www.mahimajyoti.dev`
4. Vercel shows DNS records — add them at your registrar:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

5. Wait 5–60 min for DNS → Vercel issues HTTPS automatically

### Option B — Free subdomain only

Use `your-project.vercel.app` — no domain purchase. Still fine for LinkedIn until you buy one.

---

## Step 4 — Update links everywhere

After deploy, add your URL to:

- LinkedIn **Featured** + headline
- GitHub profile README
- Resume (when finalized)
- LeetCode bio

---

## Re-enable resume download later

In `src/data/portfolio.ts`:

```ts
showResumeDownloads: true,
```

Add PDFs to `public/` and wire buttons in Hero/Navbar/Contact (or ask Cursor to re-enable).
