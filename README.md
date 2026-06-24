# Nila Herbals — Official Website

Official website for **Nila Herbals**, a traditional Ayurvedic-inspired hair and skin care brand based in India.

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS (no framework, no build step)
- Hosted free on [Netlify](https://netlify.com)
- Google Fonts (Cormorant Garamond + Source Sans 3)

## Project Structure

```
nila-herbals/
├── index.html              # Homepage
├── netlify.toml            # Netlify deployment config
├── assets/
│   ├── css/
│   │   └── style.css       # All styles + design system tokens
│   ├── js/
│   │   └── main.js         # Nav, forms, scroll animations
│   └── images/             # Product images (swap with real photos later)
└── README.md
```

## Local Development

No build step needed. Just open `index.html` in your browser, or use VS Code Live Server extension.

## Deployment

This site auto-deploys to Netlify on every push to the `main` branch.

## Updating Contact Details (Phone, Email, Instagram, Facebook)

**You only need to edit ONE file:** `assets/js/config.js`

```javascript
const NILA_CONFIG = {
  whatsappNumber: "91XXXXXXXXXX",
  email: "nilaherbalofficial@gmail.com",
  instagramHandle: "nila_herbal_care_official",
  facebookPage: "YOUR_FACEBOOK_PAGE",
  siteUrl: "https://nila-herbals.netlify.app"
};
```

Change a value here, commit, push — every WhatsApp button, email link, and
Instagram link across the entire site updates automatically. You never need
to touch index.html, tips.html, or contact.html for this.

## Updating Products

1. Open `index.html`
2. Find the product cards section (search for `id="products"`)
3. Copy an existing `.product-card` block and update the content
4. Commit and push — Netlify deploys automatically

## Adding a Daily Tip

1. Upload the tip image to `assets/images/tips/` via GitHub's web UI
2. Open `tips.html`, copy one `.tip-card` block, paste it at the TOP of the grid
3. Update the image filename, category (`hair`/`skin`/`wellness`), date, heading, text
4. Commit and push

## WhatsApp Order Links

All "Order" buttons use WhatsApp links in this format:
```
https://wa.me/91XXXXXXXXXX?text=Hi, I'd like to order [PRODUCT NAME]
```
Update the phone number in `index.html` (search for `919999999999` and replace with real number).

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Forest | `#0F3816` | Primary dark green |
| Gold | `#BD841B` | Accents, CTAs |
| Cream | `#F5EEDC` | Page background |
| Sage | `#E2EAC5` | Card backgrounds |
| Ink | `#1A2410` | Body text |

## TODO (next phases)

- [ ] Individual product detail pages
- [ ] Real product photography
- [ ] Blog section
- [ ] Razorpay payment links per product
- [ ] Contact/dealer enquiry form (Netlify Forms)
- [ ] SEO: sitemap.xml, robots.txt
