const shootingStars = document.querySelectorAll(".shooting-star");

const starColors = [
  "#fff1a8",
  "#bde7ff",
  "#e7c6ff",
  "#ffd6a5",
  "#c8f7ff"
];

function randomizeStar(star) {
  const randomY = Math.random() * 75 + 5;
  const randomColor = starColors[Math.floor(Math.random() * starColors.length)];
  const randomDuration = Math.random() * 2 + 4;
  const randomDelay = Math.random() * 5;

  star.style.animation = "none";
  star.style.opacity = "0";
  star.style.left = "-100px";
  star.style.top = `${randomY}%`;
  star.style.background = `linear-gradient(90deg, ${randomColor}, transparent)`;

  setTimeout(() => {
    star.style.animation = `shoot ${randomDuration}s ease-in`;
    star.style.opacity = "1";
  }, randomDelay * 1000);
}

shootingStars.forEach(star => {
  star.addEventListener("animationend", () => {
    randomizeStar(star);
  });

  randomizeStar(star);
});