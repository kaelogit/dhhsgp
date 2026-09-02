# Google Search Console — dhhsgrantprogram.com

Site: **https://www.dhhsgrantprogram.com** (apex `dhhsgrantprogram.com` redirects here on Vercel)

## 1. Add the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose **URL prefix** and enter:
   ```
   https://www.dhhsgrantprogram.com
   ```
4. Under **HTML tag**, copy only the **content** value (not the full meta tag). Example:
   ```
   abc123xyz...
   ```

## 2. Verify in Vercel

1. Vercel → **dhhsgrantprogram** project → **Settings** → **Environment Variables**.
2. Add or update:
   ```
   GOOGLE_SITE_VERIFICATION=abc123xyz...
   NEXT_PUBLIC_SITE_URL=https://www.dhhsgrantprogram.com
   ```
3. **Redeploy** (Deployments → … → Redeploy) so the verification meta tag is in the HTML.

## 3. Confirm verification

1. In Search Console, click **Verify**.
2. Optional check: view page source on the homepage and look for:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```

## 4. Submit the sitemap

1. Search Console → **Sitemaps**.
2. Submit:
   ```
   https://www.dhhsgrantprogram.com/sitemap.xml
   ```
   (`https://dhhsgrantprogram.com/sitemap.xml` also works — it redirects to www.)

## 5. Request indexing (priority URLs)

Use **URL inspection** → paste URL → **Request indexing** for:

| URL |
|-----|
| https://www.dhhsgrantprogram.com/ |
| https://www.dhhsgrantprogram.com/apply |
| https://www.dhhsgrantprogram.com/programs |
| https://www.dhhsgrantprogram.com/faq |
| https://www.dhhsgrantprogram.com/verify |
| https://www.dhhsgrantprogram.com/awards |
| https://www.dhhsgrantprogram.com/how-it-works |
| https://www.dhhsgrantprogram.com/eligibility |

Program pages (`/programs/medical`, `/programs/housing`, etc.) are already in the sitemap — Google will pick them up after the sitemap is processed.

## 6. What is already on the site

- `robots.txt` — allows Googlebot, points to sitemap
- `sitemap.xml` — all public pages + 8 program slugs
- Canonical URLs, Open Graph, Twitter cards
- JSON-LD: Organization, WebSite, breadcrumbs on inner pages
- `GOOGLE_SITE_VERIFICATION` env → verification meta tag in layout

## 7. Timeline

- Verification: immediate after redeploy
- Sitemap processing: usually 1–3 days
- Full indexing: often 1–2 weeks for a new domain; requesting indexing on key URLs speeds up the main pages

## Optional: Domain property

For coverage across `http`, `https`, `www`, and apex in one property, add a **Domain** property for `dhhsgrantprogram.com` and verify via DNS TXT in your domain registrar (same place you pointed DNS to Vercel).
