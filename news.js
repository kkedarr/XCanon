// Get the scroll container and mini-cards
const scrollContainer = document.getElementById("scroll-container");
const miniCards = scrollContainer.getElementsByClassName("mini-card-article");

// Calculate the total width of mini-cards
let totalWidth = 0;
for (const miniCard of miniCards) {
  totalWidth += miniCard.offsetWidth;
}

// Set the width of the scroll container to the total width of mini-cards
scrollContainer.style.width = totalWidth + "px";
