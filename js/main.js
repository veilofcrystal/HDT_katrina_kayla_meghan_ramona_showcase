const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const player = new Plyr('video'); 
const whenContent = document.getElementById('whenContent');
const whereContent = document.getElementById('whereContent');
const scheduleOne = document.getElementById('scheduleOne');
const scheduleTwo = document.getElementById('scheduleTwo');
const schduleThree = document.getElementById('scheduleThree');
 

function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

function toggleWhen() {
    console.log("when clicked")
    if (whenContent.classList.contains("hidden")) {
        whenContent.classList.remove("hidden");
    } else {
        whenContent.classList.add("hidden");
}}

function toggleWhere() {
    console.log("where clicked")
    if (whereContent.classList.contains("hidden")) {
        whereContent.classList.remove("hidden");
    } else {
        whereContent.classList.add("hidden");
}}

function toggleSchedOne() {
    console.log("Schedule one clicked")
    if (scheduleOne.classList.contains("hidden")) {
        scheduleOne.classList.remove("hidden");
    } else {
        scheduleOne.classList.add("hidden");
}}

function toggleSchedTwo() {
    console.log("Schedule Two clicked")
    if (scheduleTwo.classList.contains("hidden")) {
        scheduleTwo.classList.remove("hidden");
    } else {
        scheduleTwo.classList.add("hidden");
}}


function toggleSchedThree() {
    console.log("Schedule three clicked")
    if (scheduleThree.classList.contains("hidden")) {
        scheduleThree.classList.remove("hidden");
    } else {
        scheduleThree.classList.add("hidden");
}}

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

whenPanel.addEventListener('click', toggleWhen);
wherePanel.addEventListener('click', toggleWhere);
schedOnePanel.addEventListener('click', toggleSchedOne);
schedTwoPanel.addEventListener('click', toggleSchedTwo);
schedThreePanel.addEventListener('click', toggleSchedThree);