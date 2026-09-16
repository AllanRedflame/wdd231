const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-dropdown");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('open'); 
});