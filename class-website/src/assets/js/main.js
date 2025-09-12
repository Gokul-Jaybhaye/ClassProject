// Toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Accessibility: allow hamburger menu to open with keyboard
document.addEventListener('DOMContentLoaded', function () {
    const