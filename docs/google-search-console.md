# Google Search Console — www.hhsgrantprogram.com

**Primary host:** `https://www.hhsgrantprogram.com`  
Apex (`https://hhsgrantprogram.com`) **308 redirects → www**. Do not treat apex as the indexed homepage.

Site code, `sitemap.xml`, `robots.txt`, and canonical tags use **www**.

Former domain: `dhhsgrantprogram.org` (keep redirects from .org → .com after cutover).

---

## 1. Property to use

**Best option — Domain property (covers everything once):**

1. Open [Google Search Console](https://search.google.com/search-console).
2. **Add property** → **Domain** → enter:
   ```
   hhsgrantprogram.com
   ```
3. Verify with the DNS TXT record at your registrar (same place DNS points to Vercel).

**Or URL-prefix (www only):**

1. **Add property** → **URL prefix** → enter:
   ```
   https://www.hhsgrantprogram.com
   ```
2. Under **HTML tag**, copy only the **content** value.
3. In Vercel → project → **Settings** → **Environment Variables**:
   ```
   GOOGLE_SITE_VERIFICATION=abc123xyz...
   NEXT_PUBLIC_SITE_URL=https://www.hhsgrantprogram.com
   ```
4. Redeploy so the meta tag is in the HTML, then click **Verify** in Search Console.

Do **not** use a URL-prefix property on bare `https://hhsgrantprogram.com` for indexing work — those URLs redirect and show “Page with redirect.”

---

## 2. Submit the sitemap

1. Search Console → the **www** or **Domain** property → **Sitemaps**.
2. Submit:
   ```
   https://www.hhsgrantprogram.com/sitemap.xml
   ```

---

## 3. Request indexing (www URLs only)

**URL inspection** → paste → **Request indexing**:

| URL |
|-----|
| https://www.hhsgrantprogram.com/ |
| https://www.hhsgrantprogram.com/apply |
| https://www.hhsgrantprogram.com/programs |
| https://www.hhsgrantprogram.com/faq |
| https://www.hhsgrantprogram.com/verify |
| https://www.hhsgrantprogram.com/awards |
| https://www.hhsgrantprogram.com/how-it-works |
| https://www.hhsgrantprogram.com/eligibility |
| https://www.hhsgrantprogram.com/donate |
| https://www.hhsgrantprogram.com/about |
| https://www.hhsgrantprogram.com/impact |
| https://www.hhsgrantprogram.com/contact |
| https://www.hhsgrantprogram.com/security |
| https://www.hhsgrantprogram.com/privacy |
| https://www.hhsgrantprogram.com/terms |
| https://www.hhsgrantprogram.com/programs/medical |
| https://www.hhsgrantprogram.com/programs/housing |
| https://www.hhsgrantprogram.com/programs/business |
| https://www.hhsgrantprogram.com/programs/education |
| https://www.hhsgrantprogram.com/programs/teachers |
| https://www.hhsgrantprogram.com/programs/retired-teachers |
| https://www.hhsgrantprogram.com/programs/seniors |
| https://www.hhsgrantprogram.com/programs/assistance |

---

## 4. What “Page with redirect” means

If you inspect `https://hhsgrantprogram.com/`, Google may say **Page is not indexed: Page with redirect**. That is expected. Index and request the **www** URL instead.

---

## 5. Already on the site

- `robots.txt` — `Host: www.hhsgrantprogram.com`, sitemap on www
- `sitemap.xml` — all locs on www
- Canonical / Open Graph / JSON-LD use www (`NEXT_PUBLIC_SITE_URL` is normalized to www in code)
- `GOOGLE_SITE_VERIFICATION` → verification meta in layout

---

## 6. Timeline

- Sitemap processing: usually 1–3 days
- Brand search visibility: often days to a couple of weeks even after “URL is on Google”
- Check presence with: `site:www.hhsgrantprogram.com`

---

## 7. Vercel env check

Confirm production has:

```
NEXT_PUBLIC_SITE_URL=https://www.hhsgrantprogram.com
ZOHO_USER=apply@hhsgrantprogram.com
MAIL_FROM=apply@hhsgrantprogram.com
TO_EMAIL=sarahmitchell@hhsgrantprogram.com
```

Redeploy after changing these. The app also forces www in code if apex is set by mistake.
