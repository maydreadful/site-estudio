// JavaScript for mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        if (!navLinks.classList.contains('hidden')) {
            navLinks.classList.add('hidden');
            navLinks.classList.remove('flex');
            navLinks.classList.remove('flex-col');
        }
    });
});
