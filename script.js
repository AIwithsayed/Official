// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#ffffff';
        nav.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        nav.style.backgroundColor = '#ffffff';
        nav.style.boxShadow = 'none';
    }
});

// Add animation to course cards on scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Mobile Menu Handling
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        console.log('Mobile menu button clicked'); // Debug log
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Link clicked, closing menu'); // Debug log
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            console.log('Clicked outside menu, closing'); // Debug log
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Make navbar list items clickable
    const navItems = document.querySelectorAll('nav ul li');
    
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function() {
                window.location.href = link.href;
            });
        }
    });

    // Optional: Add hover effect to show interactivity
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
});
