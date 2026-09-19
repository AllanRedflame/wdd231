const buttonList = document.getElementById("list");
const buttonGrid = document.getElementById("grid");
const main = document.querySelector("#chamber-main");

function setMode(mode) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.classList.remove("on", "off");
    card.classList.add(mode);
  });

  main.classList.remove("on", "off");
  main.classList.add(mode);

  buttonList.classList.remove("on", "off");
  buttonGrid.classList.remove("on", "off");

  if (mode === "on") {
    buttonList.classList.add("on");
    buttonGrid.classList.add("off");
  } else {
    buttonList.classList.add("off");
    buttonGrid.classList.add("on");
  }
}

setMode("on");

buttonList.addEventListener("click", () => setMode("on"));
buttonGrid.addEventListener("click", () => setMode("off"));
