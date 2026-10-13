# vadapter.online

Static marketing site for Voice Adapter. Plain HTML + CSS, no build step.

- `index.html` — home page
- `privacy/` — Privacy Policy (required for Google OAuth verification)
- `terms/` — Terms of Service
- `404.html`, `robots.txt`, `sitemap.xml`, `vercel.json`
- `assets/` — styles, favicon, Open Graph image

Preview locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

Deploy: push to GitHub, import in Vercel (Framework preset: **Other**, no build command, output directory `.`),
then add `vadapter.online` and `www.vadapter.online` in Vercel → Settings → Domains.
In Namecheap add only the records Vercel shows. Do not delete `app`, `_railway-verify.app` or the Zoho mail records.
