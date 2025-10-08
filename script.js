// ===================================
// MOBILE MENU TOGGLE
// ===================================

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
// SMOOTH SCROLL FOR NAV LINKS
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// FORM SUBMISSION HANDLER
// ===================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation feedback
    alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

// Create observer for scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Animate hero content on load
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.classList.add('animate-in');
}

// Animate section titles
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach(title => {
    title.classList.add('fade-up');
    scrollObserver.observe(title);
});

// Animate feature cards with stagger
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.classList.add('fade-up');
    card.style.transitionDelay = `${index * 0.1}s`;
    scrollObserver.observe(card);
});

// Animate about section content
const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');
if (aboutText) {
    aboutText.classList.add('fade-left');
    scrollObserver.observe(aboutText);
}
if (aboutImage) {
    aboutImage.classList.add('fade-right');
    scrollObserver.observe(aboutImage);
}

// Animate testimonial cards with stagger
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
    card.classList.add('fade-up');
    card.style.transitionDelay = `${index * 0.15}s`;
    scrollObserver.observe(card);
});

// Animate contact form
const contactIntro = document.querySelector('.contact-intro');
const contactFormElement = document.querySelector('.contact-form');
if (contactIntro) {
    contactIntro.classList.add('fade-up');
    scrollObserver.observe(contactIntro);
}
if (contactFormElement) {
    contactFormElement.classList.add('fade-up');
    contactFormElement.style.transitionDelay = '0.2s';
    scrollObserver.observe(contactFormElement);
}

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.querySelector('.back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
