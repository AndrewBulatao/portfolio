const bubbleArea = document.querySelector(".about-bubbles");

function createBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("about-bubble");
  const size = Math.random() * 35 + 20;
  const duration = Math.random() * 3 + 5;
  const side = Math.random() < 0.5 ? "left" : "right";
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.bottom = `${Math.random() * 20 + 5}%`;
  bubble.style[side] = `-${size}px`;
  bubble.style.setProperty("--bubble-duration",`${duration}s`);
  bubble.style.setProperty("--bubble-direction",side === "left" ? 1 : -1);
  bubbleArea.appendChild(bubble);
  setTimeout(() => {
    explodeBubble(bubble);
  },duration * 1000);
}

function explodeBubble(bubble) {
  const rect = bubble.getBoundingClientRect();
  const areaRect = bubbleArea.getBoundingClientRect();
  const centerX = rect.left - areaRect.left + rect.width / 2;
  const centerY = rect.top - areaRect.top + rect.height / 2;
  bubble.classList.add("exploding");
  for (let i = 0; i < 7; i++) {
    const particle = document.createElement("span");
    particle.classList.add("about-particle");
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    const angle = (Math.PI * 2 / 7) * i;
    const distance = Math.random() * 30 + 25;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    particle.style.setProperty("--particle-x",`${x}px`);
    particle.style.setProperty("--particle-y",`${y}px`);
    particle.style.setProperty("--particle-duration",`${Math.random() * 0.2 + 0.4}s`);
    bubbleArea.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    },700);
  }
  setTimeout(() => {
    bubble.remove();
  },500);
}
setInterval(createBubble,1000);