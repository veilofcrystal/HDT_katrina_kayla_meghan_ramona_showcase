const navLinks = document.querySelector('#navLinks');
const menuIcon = document.querySelector('#menuIcon');
const whenContent = document.getElementById('whenContent');
const whereContent = document.getElementById('whereContent');
const scheduleOne = document.getElementById('scheduleOne');
const scheduleTwo = document.getElementById('scheduleTwo');
const schduleThree = document.getElementById('scheduleThree');
const player = new Plyr('video'); 

const fadeElements = document.querySelectorAll('.fade-element');
  
const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  // Element enters viewport
        } else {
          entry.target.classList.remove('visible');  // Element leaves viewport
        }
      });
    });
  
fadeElements.forEach((element) => {
observer.observe(element);
    });
  
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
=======
function toggleMenu() {
    console.log("drop down menu clicked")
    navLinks.classList.toggle('active');
}

menuIcon.addEventListener('click', toggleMenu);
whenPanel.addEventListener('click', toggleWhen);
wherePanel.addEventListener('click', toggleWhere);
schedOnePanel.addEventListener('click', toggleSchedOne);
schedTwoPanel.addEventListener('click', toggleSchedTwo);
schedThreePanel.addEventListener('click', toggleSchedThree);