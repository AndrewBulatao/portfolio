const grass = document.querySelector(".grass");

for (let i = 0; i < 300; i++) {
  const blade = document.createElement("div");
  blade.classList.add("grass-blade");
  const x = Math.random() * 100;
  const height = Math.random() * 80 + 30;
  const duration = Math.random() * 2 + 2;
  const delay = Math.random() * 2;
  blade.style.left = `${x}%`;
  blade.style.height = `${height}px`;
  blade.style.animationDuration = `${duration}s`;
  blade.style.animationDelay = `${delay}s`;
  grass.appendChild(blade);
}

const spiderLilies = document.querySelectorAll(".spider-lily");
spiderLilies.forEach((flower) => {
  const duration = Math.random() * 2 + 2;
  const delay = Math.random() * 2;
  flower.style.animationDuration = `${duration}s`;
  flower.style.animationDelay = `${delay}s`;
});