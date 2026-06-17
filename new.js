// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.getElementById('navLinks').classList.remove('open');
    });
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveLink() {
    let current = '';
    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 80) {
            current = section.id;
        }
    });
    navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
