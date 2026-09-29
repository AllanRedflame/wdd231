const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-dropdown");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('open'); 
});

const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close");

openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = btn.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

window.addEventListener("click", (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
