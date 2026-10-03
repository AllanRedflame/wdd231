import { items } from "../data/locations.mjs";

const container = document.querySelector(".cards-grid");

items.forEach(item => {
  const areaClass = item.title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/\s+/g, "");

  const card = document.createElement("section");
  card.classList.add("location-card", areaClass);

  const title = document.createElement("h2");
  title.textContent = item.title;

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.loading = "lazy"; 
  figure.appendChild(img);

  const address = document.createElement("address");
  address.textContent = item.address;

  const description = document.createElement("p");
  description.textContent = item.description;

  const button = document.createElement("button");
  button.textContent = "Learn More";

  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(button);

  container.appendChild(card);
});
