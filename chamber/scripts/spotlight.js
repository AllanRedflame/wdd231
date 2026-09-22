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
  const main = document.querySelector("#spotlights-div");

  const shuffled = data.sort(() => Math.random() - 0.5);

  const randomThree = shuffled.slice(0, 3);

  randomThree.forEach(entry => {

    const div = document.createElement("div");
    const header = document.createElement("h3");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("p");
    const loyalty = document.createElement("p");
    const image = document.createElement("img");
    const bottomDiv = document.createElement("div");
    const topDiv = document.createElement("div");

    image.src = entry.imageFile;
    image.alt = entry.companyName;

    header.textContent = entry.companyName;
    address.textContent = `Address: ${entry.address}`;
    phone.textContent = `Phone: ${entry.phone}`;
    website.textContent = entry.website;
    loyalty.textContent = `Loyalty Tier: ${entry.loyaltyTier}`;

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
  });
});
