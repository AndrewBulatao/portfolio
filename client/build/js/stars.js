const stars = document.querySelector(".stars");

for (let i = 0; i < 50; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 3 + 1;
  const x = Math.random() * 100;
  const y = Math.random() * 100;

  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${x}%`;
  star.style.top = `${y}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;

  stars.appendChild(star);
}