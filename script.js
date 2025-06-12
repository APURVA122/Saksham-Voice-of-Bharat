// Smooth scroll buttons in hero and header
document.addEventListener('DOMContentLoaded', () => {
  const btnLoginScroll = document.getElementById('btnLoginScroll');
  const btnGetStarted = document.getElementById('btnGetStarted');
  const btnExploreFeatures = document.getElementById('btnExploreFeatures');
  const loginSection = document.getElementById('login');
  const featuresSection = document.getElementById('features');

  if (btnLoginScroll && loginSection) {
    btnLoginScroll.addEventListener('click', () => {
      loginSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (btnGetStarted && loginSection) {
    btnGetStarted.addEventListener('click', () => {
      loginSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  if (btnExploreFeatures && featuresSection) {
    btnExploreFeatures.addEventListener('click', () => {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Anchor smooth scroll for nav links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Login Form handling (placeholder - no real login)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = loginForm.email.value.trim();
      const mobile = loginForm.mobile.value.trim();

      if (!email && !mobile) {
        alert('Please enter either an email address or a mobile number to login.');
        return;
      }

      // Validate email if entered
      if (email && !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Validate mobile if entered
      if (mobile && !validateMobile(mobile)) {
        alert('Please enter a valid mobile number.');
        return;
      }

      alert(`Login functionality is not implemented.\nEmail: ${email || '(none)'}\nMobile: ${mobile || '(none)'}`);
    });
  }
});

// Email validation helper
function validateEmail(email) {
  // Basic RFC 5322 email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Mobile number validation helper (basic)
function validateMobile(mobile) {
  // Allow digits, spaces, + or - sign, min length 7 max 15 roughly for Indian mobile
  const re = /^[\d\s\+\-]{7,15}$/;
  return re.test(mobile);
}
