import { items } from "../data/locations.mjs";

const container = document.querySelector(".cards-grid");

items.forEach(item => {
  // Convert title → CSS class (lowercase, no spaces)
  const areaClass = item.title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")      // remove punctuation
    .replace(/\s+/g, "");           // remove spaces

  const card = document.createElement("section");
  card.classList.add("location-card", areaClass);

  // Title
  const title = document.createElement("h2");
  title.textContent = item.title;

  // Image
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  figure.appendChild(img);

  // Address
  const address = document.createElement("address");
  address.textContent = item.address;

  // Description
  const description = document.createElement("p");
  description.textContent = item.description;

  // Button
  const button = document.createElement("button");
  button.textContent = "Learn More";

  // Build card
  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(button);

  container.appendChild(card);

  
});