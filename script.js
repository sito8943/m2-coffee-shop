// ===================================
// SMOOTH SCROLL FOR NAV LINKS
// ===================================

const navLinks = document.querySelectorAll('.nav-link');

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
        
        // Close mobile menu on nav click
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// FORM SUBMISSION HANDLER
// ===================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    
    alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
    contactForm.reset();
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    header.style.boxShadow = currentScroll > 100 
        ? '0 4px 16px rgba(0, 0, 0, 0.12)' 
        : '0 2px 8px rgba(0, 0, 0, 0.08)';
}, { passive: true });

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Animate hero content
const heroContent = document.querySelector('.hero-content');
if (heroContent) heroContent.classList.add('animate-in');

// Animate elements
[
    { selector: '.section-title', className: 'fade-up' },
    { selector: '.feature-card', className: 'fade-up', stagger: 0.1 },
    { selector: '.about-text', className: 'fade-left' },
    { selector: '.about-image', className: 'fade-right' },
    { selector: '.testimonial-card', className: 'fade-up', stagger: 0.15 },
    { selector: '.contact-intro', className: 'fade-up' },
    { selector: '.contact-form', className: 'fade-up', delay: 0.2 }
].forEach(({ selector, className, stagger, delay }) => {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add(className);
        if (stagger) el.style.transitionDelay = `${index * stagger}s`;
        if (delay) el.style.transitionDelay = `${delay}s`;
        scrollObserver.observe(el);
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('show', window.pageYOffset > 300);
}, { passive: true });

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
