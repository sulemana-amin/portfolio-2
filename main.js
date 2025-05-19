// Theme toggle, smooth scroll, contact form feedback, and back-to-top
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode === null) darkMode = prefersDark ? "true" : "false";
  if (darkMode === "true") {
    body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  } else {
    body.classList.remove("dark-mode");
    toggle.textContent = "🌙";
  }

  toggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  });

  // Smooth scroll for nav links and ctas
  document.querySelectorAll('a[href^="#"], .cta-btn, .about-cta-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Contact form feedback (front-end only)
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Sending...";
      status.style.color = "#0d9488";
      setTimeout(() => {
        status.textContent = "Thank you! Your message has been received.";
        status.style.color = "#2563eb";
        form.reset();
      }, 1200);
    });
  }

  // Back to top button
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 350) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});