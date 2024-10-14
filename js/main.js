const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const player = new Plyr('video'); 

function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);

//javascript for portfolio list

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
  
//javascript for carousel configuration

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

