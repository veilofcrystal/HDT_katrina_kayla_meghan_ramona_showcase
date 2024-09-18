const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');


function toggleMenu() {
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);