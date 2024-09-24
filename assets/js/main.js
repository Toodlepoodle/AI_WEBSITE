document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#fbbf24';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '#333';
        });
    });

    // Add click effect to contact button
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', () => {
        alert('Contact form coming soon!');
    });
});