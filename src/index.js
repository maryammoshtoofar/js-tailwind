const nav = document.querySelector(".nav");
const body = document.querySelector("body");

// function init() {
//   nav.style.display = "none";
// }

function toggleNav() {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  } else {
    nav.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }
}

// document.addEventListener("DOMContentLoaded", init);
