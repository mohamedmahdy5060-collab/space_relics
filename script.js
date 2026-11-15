const stories = [
  "I was the Lunar Roving Vehicle. I helped astronauts travel across the Moon during Apollo 15, 16 and 17. I traveled up to 35.9 km on Apollo 17. My mission ended, but I helped humans explore farther than ever before.",

  "I was Spirit. NASA planned my mission for 90 Martian days, but I survived for more than six years! I discovered strong evidence that Mars was once much wetter. I became silent, but my discoveries changed science forever.",

  "I was Sojourner. I explored Mars in 1997. My mission lasted 83 Martian days, and I traveled about 100 meters. I proved that robotic vehicles could explore another planet."
];

function tellStory(index) {
  const box = document.getElementById("story" + index);

  if (box.innerHTML !== "") {
    box.innerHTML = "";
  } else {
    box.innerHTML =
      "<h3>My Story 📖</h3><p>" +
      stories[index] + "</p>";
  }
}

function filterItems(world) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (world === "all" ||
        card.dataset.world === world) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function showAll() {
  filterItems("all");
  document.getElementById("museum").scrollIntoView({
    behavior: "smooth"
  });
}
