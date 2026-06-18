// ============ MOBILE NAV TOGGLE ============
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--cream)';
    navLinks.style.padding = '1.5rem 2rem';
    navLinks.style.gap = '1.2rem';
    navLinks.style.borderBottom = '1px solid var(--sage)';
    navLinks.style.zIndex = '99';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  });
}

// ============ NEWSLETTER FORM ============
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    const btn = newsletterForm.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    btn.style.background = '#25D366';
    newsletterForm.querySelector('input').value = '';
    setTimeout(() => {
      btn.textContent = 'Subscribe';
      btn.style.background = '';
    }, 3000);
    // TODO: connect to Netlify Forms or email provider later
    console.log('Newsletter signup:', email);
  });
}

// ============ SCROLL REVEAL (lightweight, no library) ============
const revealEls = document.querySelectorAll('.product-card, .why-card, .testimonial-card, .ingredient-badge');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}
