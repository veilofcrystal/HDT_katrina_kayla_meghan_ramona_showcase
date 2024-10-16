const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const player = new Plyr('video'); 

function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);



const fadeElements = document.querySelectorAll('.fade-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); 
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  });


  fadeElements.forEach((element) => {
    observer.observe(element);
  });

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

setInterval(() => {
  changeSlide(1);
}, 5000); // Change slide every 5 seconds

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    changeSlide(1); // Next slide
  } else if (e.key === 'ArrowLeft') {
    changeSlide(-1); // Previous slide
  }
});


// Testimonial carousel configuration
let currentTestSlide = 0;
const testSlides = document.querySelectorAll(".carousel-item-test");

function showTestSlide(index) {
  testSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Function to change slides
function changeTestSlide(direction) {
  currentTestSlide += direction;
  if (currentTestSlide < 0) {
    currentTestSlide = testSlides.length - 1;
  } else if (currentTestSlide >= testSlides.length) {
    currentTestSlide = 0;
  }
  showTestSlide(currentTestSlide);
}

// Show the first testimonial slide on page load
showTestSlide(currentTestSlide);

// Automatically change the testimonial slide every 5 seconds
setInterval(() => {
  changeTestSlide(1);
}, 8000); // Adjust the timing as needed

//--------scroll button javascript!!----------------//
let btn= document.getElementById("scrollToTopBtn");

window.onscroll=function () {
  if (document.body.scroolTop > 200 || document.documentElement.scrollTop > 200)
    btn.style.display="block";
 else {
  btn.style.display="none";
}
};

function scrollToTop(){
  console.log("scroll up button clicked");
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
}

btn.addEventListener('click', scrollToTop);