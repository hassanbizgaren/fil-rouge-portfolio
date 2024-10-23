// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navigation bar effect
const nav = document.querySelector('nav');
const stickyOffset = nav.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= stickyOffset) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Hover effect for images
const skillImages = document.querySelectorAll('.third-page img');
skillImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Fade-in effect when sections come into view
const fadeElements = document.querySelectorAll('main');
const options = {
    threshold: 0.1
};

const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

fadeElements.forEach(section => {
    fadeInOnScroll.observe(section);
});
