document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Button hover animation
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.classList.add('animate');
    });
    button.addEventListener('mouseleave', function() {
      this.classList.remove('animate');
    });
  });

  // Reveal on scroll
  const faders = document.querySelectorAll('.fade-in');
  const options = { threshold: 0.2 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
