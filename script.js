document.addEventListener('DOMContentLoaded', () => {
    // 1. Set current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });

        // Close mobile menu when a link is clicked
        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            });
        });
    }

    // 3. Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(10, 10, 15, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // 4. Scroll Reveal Animation using Intersection Observer
    // First, add 'reveal' class to elements we want to animate
    const sections = document.querySelectorAll('.section-title, .section-desc, .card, .timeline-item, .about-content, .skills-content, .detail-section h2, .detail-section p, .benefits-list li');
    sections.forEach(sec => {
        sec.classList.add('reveal');
    });

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        });
    }, revealOptions);

    sections.forEach(sec => {
        revealObserver.observe(sec);
    });
});

