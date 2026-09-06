const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-box");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('open'); 
});