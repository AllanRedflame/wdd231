const box = document.getElementById("nav-box");

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
  });


const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-box");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('open'); 
});