// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
function displayWelcomeMessage() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Welcome to Urban Bites Café!";
  
    if (hour < 12) {
      greeting = "Good morning! Start your day with a fresh brew ☕";
    } else if (hour < 18) {
      greeting = "Good afternoon! Treat yourself to a delicious snack 🥐";
    } else {
      greeting = "Good evening! Relax with something sweet 🍰";
    }
  
    const greetingEl = document.getElementById("greeting");
    if (greetingEl) greetingEl.textContent = greeting;
  }
  window.onload = displayWelcomeMessage;

  function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
  
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < windowHeight - 50) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  