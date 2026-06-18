// ============ MOBILE NAV TOGGLE ============
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
let navOpen = false;

function closeNav() {
  navOpen = false;
  navLinks.classList.remove('nav-open');
  mobileToggle.setAttribute('aria-expanded', 'false');
}

function openNav() {
  navOpen = true;
  navLinks.classList.add('nav-open');
  mobileToggle.setAttribute('aria-expanded', 'true');
}

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navOpen ? closeNav() : openNav();
  });

  // Close when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navOpen && !e.target.closest('.nav-wrap')) closeNav();
  });
}

// ============ NEWSLETTER FORM (Netlify Forms) ============
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('button[type="submit"]');
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const formData = new FormData(newsletterForm);

    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        btn.textContent = 'Subscribed ✓';
        btn.style.background = '#25D366';
        emailInput.value = '';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error('Form submit failed');
      }
    } catch (err) {
      btn.textContent = 'Try again';
      btn.disabled = false;
      console.error('Newsletter form error:', err);
    }
  });
}

// ============ SCROLL REVEAL (no library needed) ============
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealEls = document.querySelectorAll('.product-card, .why-card, .testimonial-card, .ingredient-badge');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger cards slightly
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
}
