const fireflies = document.querySelector(".fireflies");

for (let i = 0; i < 15; i++) {
  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = Math.random() * 4 + 3;
  const moveDuration = Math.random() * 20 + 15;
  const flashDuration = Math.random() * 4 + 4;
  const flashDelay = Math.random() * 6;
  firefly.style.left = `${x}%`;
  firefly.style.top = `${y}%`;
  firefly.style.width = `${size}px`;
  firefly.style.height = `${size}px`;
  firefly.style.animationDuration = `${moveDuration}s,${flashDuration}s`;
  firefly.style.animationDelay = `0s,${flashDelay}s`;
  fireflies.appendChild(firefly);
}