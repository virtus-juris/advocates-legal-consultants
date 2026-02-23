// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Submission Logic
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. An attorney will contact you shortly.');
        contactForm.reset();
    });
}

// Mobile Menu Toggle (Simplified)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if(burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}