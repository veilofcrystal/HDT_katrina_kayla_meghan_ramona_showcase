const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const player = new Plyr('video'); 
menuIcon.addEventListener('click', toggleMenu);
const fadeElements = document.querySelectorAll('.fade-element');
const exemptElements = document.querySelectorAll('header, footer'); 

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
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showCurrentItem() {
  items.forEach((item, index) => {
    item.classList.remove('active'); // Remove active class from all
    if (index === currentIndex) {
      item.classList.add('active'); // Add active class to current item
    }
  });
}

// Example of how to navigate between items (next/prev buttons)
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Loop back to the first item
  showCurrentItem();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop back to the last item
  showCurrentItem();
});

// Initialize the first item
showCurrentItem();
