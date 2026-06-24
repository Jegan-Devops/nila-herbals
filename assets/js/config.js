/* ============================================================
   NILA HERBALS — SITE CONFIG
   Edit your contact details here ONCE. Every page pulls from
   this file automatically, so you never hunt through HTML again.

   After editing this file: commit + push. That's it.
   ============================================================ */

const NILA_CONFIG = {
  whatsappNumber: "917904833225",      // country code + number, no + or spaces
  email: "nilaherbalofficial@gmail.com",
  instagramHandle: "nila_herbal_care_official",
  facebookPage: "YOUR_FACEBOOK_PAGE",   // update once you create the page
  siteUrl: "https://nila-herbals.netlify.app"
};

// ---- DO NOT EDIT BELOW THIS LINE ----
// Automatically fills every element on the page that requests config data.
document.addEventListener('DOMContentLoaded', () => {
  const waBase = `https://wa.me/${NILA_CONFIG.whatsappNumber}`;

  // Elements with data-nila="whatsapp" become WhatsApp links.
  // Optional data-msg="..." sets the prefilled message.
  document.querySelectorAll('[data-nila="whatsapp"]').forEach(el => {
    const msg = el.getAttribute('data-msg') || "Hi Nila Herbals, I'd like to know more about your products";
    el.href = `${waBase}?text=${encodeURIComponent(msg)}`;
  });

  document.querySelectorAll('[data-nila="instagram"]').forEach(el => {
    el.href = `https://instagram.com/${NILA_CONFIG.instagramHandle}`;
  });

  document.querySelectorAll('[data-nila="facebook"]').forEach(el => {
    el.href = `https://facebook.com/${NILA_CONFIG.facebookPage}`;
  });

  document.querySelectorAll('[data-nila="email"]').forEach(el => {
    el.href = `mailto:${NILA_CONFIG.email}`;
    if (el.dataset.fillText) el.textContent = NILA_CONFIG.email;
  });

  document.querySelectorAll('[data-nila="email-text"]').forEach(el => {
    el.textContent = NILA_CONFIG.email;
  });

  document.querySelectorAll('[data-nila="insta-text"]').forEach(el => {
    el.textContent = `@${NILA_CONFIG.instagramHandle}`;
  });
});
