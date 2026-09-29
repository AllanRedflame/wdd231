const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav-dropdown");

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('open'); 
});

// OPEN MODAL
document.querySelectorAll("[data-modal]").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const modalId = link.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
    });
});

document.querySelectorAll(".close").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

// CLOSE WHEN CLICKING OUTSIDE CONTENT
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
