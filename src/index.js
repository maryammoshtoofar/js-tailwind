const nav = document.querySelector(".nav");
const body = document.querySelector("body");
import { data } from "./cards-data.js";

function toggleNav() {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  } else {
    nav.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }
}


function generateCards() {
  const cardsContainer = document.querySelector(".cards");
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card m-5";
    const img = document.createElement("img");
    img.className = "rounded hover:opacity-60 w-full";
    img.src = item.img;
    img.alt = item.name;
    card.append(img);
    const title = document.createElement("h5");
    title.class = "capitalize font-semibold my-4";
    title.innerHTML = item.text;
    card.append(title);
    cardsContainer.append(card);
  });
}

document.addEventListener("DOMContentLoaded", generateCards);
