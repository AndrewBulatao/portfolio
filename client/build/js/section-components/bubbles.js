
const bubbleArea = document.querySelector(".about-bubbles");

function createBubble() {
  const bubble = document.createElement("span");
  bubble.classList.add("about-bubble");
  const size = Math.random() * 35 + 20;
  const duration = Math.random() * 3000 + 5000;
  const side = Math.random() < 0.5 ? "left" : "right";
  const areaRect = bubbleArea.getBoundingClientRect();
  const startY = areaRect.height * (Math.random() * 0.7 + 0.2);
  const startX = side === "left" ? -size : areaRect.width + size;
  const endX = areaRect.width * (Math.random() * 0.6 + 0.2);
    const endY = -size * 2;
  const direction = side === "left" ? 1 : -1;
  const control1X = startX + areaRect.width * direction * (Math.random() * 0.15 + 0.1);
  const control1Y = startY - areaRect.height * (Math.random() * 0.05 + 0.05);
  const control2X = endX - areaRect.width * direction * (Math.random() * 0.15 + 0.1);
  const control2Y = endY + areaRect.height * (Math.random() * 0.3 + 0.15);
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.addEventListener("click",() => {
    explodeBubble(bubble);
  });
  bubbleArea.appendChild(bubble);
  const startTime = performance.now();
  function animateBubble(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration,1);
    const easedProgress = progress;
    const t = easedProgress;
    const oneMinusT = 1 - t;
    const x = oneMinusT ** 3 * startX + 3 * oneMinusT ** 2 * t * control1X + 3 * oneMinusT * t ** 2 * control2X + t ** 3 * endX;
    const y = oneMinusT ** 3 * startY + 3 * oneMinusT ** 2 * t * control1Y + 3 * oneMinusT * t ** 2 * control2Y + t ** 3 * endY;
    const scale = 0.3 + t * 0.6;
    const opacity = t < 0.1 ? t / 0.1 * 0.8 : 0.8;
    bubble.style.transform = `translate(${x}px,${y}px) scale(${scale})`;
    bubble.style.opacity = opacity;
    if (progress < 1) {
      requestAnimationFrame(animateBubble);
    }
  }
  requestAnimationFrame(animateBubble);
}
function explodeBubble(bubble) {
  if (bubble.classList.contains("exploding")) {
    return;
  }
  bubble.classList.add("exploding");
  const rect = bubble.getBoundingClientRect();
  const areaRect = bubbleArea.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2 - areaRect.left;
  const centerY = rect.top + rect.height / 2 - areaRect.top;
  for (let i = 0; i < 7; i++) {
    const particle = document.createElement("span");
    particle.classList.add("about-particle");
    const angle = (Math.PI * 2 / 7) * i + Math.random() * 0.4;
    const distance = Math.random() * 35 + 25;
    const particleX = Math.cos(angle) * distance;
    const particleY = Math.sin(angle) * distance;
    const particleDuration = Math.random() * 250 + 350;
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    particle.style.setProperty("--particle-x",`${particleX}px`);
    particle.style.setProperty("--particle-y",`${particleY}px`);
    particle.style.setProperty("--particle-duration",`${particleDuration}ms`);
    bubbleArea.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    },particleDuration);
  }
  setTimeout(() => {
    bubble.remove();
  },450);
}
setInterval(createBubble,1000);

