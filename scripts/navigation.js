const box = document.getElementById("nav-box");

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
  });