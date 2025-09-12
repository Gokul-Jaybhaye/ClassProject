// Toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

document.querySelector("nav ul li a[href='#']").addEventListener("click", function(e) {
  e.preventDefault(); // prevent default link click
  this.nextElementSibling.classList.toggle("show"); // toggle dropdown
});
