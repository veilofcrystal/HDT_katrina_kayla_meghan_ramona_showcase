const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const player = new Plyr('video'); 

function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);

//javascript for list

document.addEventListener('scroll', function() {
    const listItems = document.querySelectorAll('.student-name');
    const offset = 10; // Adjust this value for earlier triggering
  
    listItems.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.outerHeight - offset && rect.bottom > 100) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 25); // Delay each item for staggered effect
      }
    });
  });
  
