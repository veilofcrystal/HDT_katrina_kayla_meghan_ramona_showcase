const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');


function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);