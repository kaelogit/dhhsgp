# Google Search Console — dhhsgrantprogram.org

Site: **https://dhhsgrantprogram.org** (apex; no `.com` domain)

## 1. Add the property

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add property**.
3. Choose **URL prefix** and enter:
   ```
   https://dhhsgrantprogram.org
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
   NEXT_PUBLIC_SITE_URL=https://dhhsgrantprogram.org
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
   https://dhhsgrantprogram.org/sitemap.xml
   ```

## 5. Request indexing (priority URLs)

Use **URL inspection** → paste URL → **Request indexing** for:

| URL |
|-----|
| https://dhhsgrantprogram.org/ |
| https://dhhsgrantprogram.org/apply |
| https://dhhsgrantprogram.org/programs |
| https://dhhsgrantprogram.org/faq |
| https://dhhsgrantprogram.org/verify |
| https://dhhsgrantprogram.org/awards |
| https://dhhsgrantprogram.org/how-it-works |
| https://dhhsgrantprogram.org/eligibility |

Program pages (`/programs/medical`, `/programs/housing`, etc.) are already in the sitemap — Google will pick them up after the sitemap is processed.

## 6. What is already on the site

- `robots.txt` — allows Googlebot, points to sitemap
- `sitemap.xml` — all public pages + program slugs
- Canonical URLs, Open Graph, Twitter cards
- JSON-LD: Organization, WebSite, breadcrumbs on inner pages
- `GOOGLE_SITE_VERIFICATION` env → verification meta tag in layout

## 7. Timeline

- Verification: immediate after redeploy
- Sitemap processing: usually 1–3 days
- Full indexing: often 1–2 weeks for a new domain; requesting indexing on key URLs speeds up the main pages

## Optional: Domain property

For coverage across `http`, `https`, `www`, and apex in one property, add a **Domain** property for `dhhsgrantprogram.org` and verify via DNS TXT in your domain registrar (same place you pointed DNS to Vercel).
