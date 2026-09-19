async function loadLocalData() {
  try {
    const response = await fetch('./data/members.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Could not fetch the local JSON file:", error);
  }
}

loadLocalData().then(data => {
  const main = document.querySelector("#chamber-main");

  // Build cards
  for (let i = 0; i < data.length; i++) {

    const div = document.createElement("div");
    const header = document.createElement("h3");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    const loyalty = document.createElement("p");
    const image = document.createElement("img");
    const bottomDiv = document.createElement("div");
    const topDiv = document.createElement("div");

    image.src = data[i].imageFile;
    image.alt = data[i].companyName;

    header.textContent = data[i].companyName;
    address.textContent = `Address: ${data[i].address}`;
    phone.textContent = `Phone: ${data[i].phone}`;
    website.textContent = data[i].website;
    loyalty.textContent = `Loyalty Tier: ${data[i].loyaltyTier}`;

    div.classList.add("card");
    topDiv.classList.add("topDiv");
    bottomDiv.classList.add("bottomDiv");

    topDiv.appendChild(header);
    bottomDiv.appendChild(image);
    bottomDiv.appendChild(address);
    bottomDiv.appendChild(phone);
    bottomDiv.appendChild(website);
    bottomDiv.appendChild(loyalty);

    div.appendChild(topDiv);
    div.appendChild(bottomDiv);

    main.appendChild(div);
  }

  setMode("on");   
});

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

buttonList.addEventListener("click", () => setMode("on"));
buttonGrid.addEventListener("click", () => setMode("off"));
