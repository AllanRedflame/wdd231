const buttonList = document.getElementById("list");
const buttonGrid = document.getElementById("grid");
const main = document.querySelector("main");

function setMode(mode) {
  const cards = document.querySelectorAll(".card");

  // Update cards
  cards.forEach(card => {
    card.classList.remove("on", "off");
    card.classList.add(mode);
  });

  // Update main
  main.classList.remove("on", "off");
  main.classList.add(mode);

  // Update buttons
  buttonList.classList.remove("on", "off");
  buttonGrid.classList.remove("on", "off");

  if (mode === "on") {
    // LIST mode
    buttonList.classList.add("on");
    buttonGrid.classList.add("off");
  } else {
    // GRID mode
    buttonList.classList.add("off");
    buttonGrid.classList.add("on");
  }
}

// ⭐ Start in GRID mode (off = grid)
setMode("off");

// Event listeners
buttonList.addEventListener("click", () => setMode("on"));
buttonGrid.addEventListener("click", () => setMode("off"));
