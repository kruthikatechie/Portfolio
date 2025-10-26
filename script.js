// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing animation
const typingText = document.getElementById("typing-text");
const roles = ["Aspiring Software Developer", "Java Enthusiast", "Machine Learning Explorer", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = roles[roleIndex];
  const displayed = current.substring(0, charIndex);
  typingText.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

typeEffect();
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Remove previous highlights
    document.querySelectorAll('section').forEach(sec => {
      sec.classList.remove('section-highlight');
    });

    // Add highlight to clicked section
    target.classList.add('section-highlight');

    // Remove highlight after 3 seconds (match animation duration)
    setTimeout(() => {
      target.classList.remove('section-highlight');
    }, 3000);
  });
});
