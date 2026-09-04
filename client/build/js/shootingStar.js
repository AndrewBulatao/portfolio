const shootingStars = document.querySelectorAll(".shooting-star");

const starColors = [
  "#fff1a8",
  "#bde7ff",
  "#e7c6ff",
  "#ffd6a5",
  "#c8f7ff"
];

shootingStars.forEach(star => {
  const randomY = Math.random() * 75 + 5;
  const randomColor = starColors[Math.floor(Math.random() * starColors.length)];
  const randomDelay = Math.random() * 5;
  const randomDuration = Math.random() * 2 + 4;

  star.style.left = "-100px";
  star.style.top = `${randomY}%`;
  star.style.background = `linear-gradient(90deg, ${randomColor}, transparent)`;
  star.style.animationDelay = `${randomDelay}s`;
  star.style.animationDuration = `${randomDuration}s`;
});