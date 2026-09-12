const sun = document.querySelector(".sun");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const startX = -60;
const startY = screenHeight * 0.6;
const peakX = screenWidth / 2;
const peakY = screenHeight * 0.05;
const endX = screenWidth + 60;
const endY = screenHeight * 0.6;
const animationDuration = 75000;
let startTime = null;


function animateSun(currentTime) {
  if (!startTime) {
    startTime = currentTime;
  }
  const elapsedTime = currentTime - startTime;
  let progress = elapsedTime / animationDuration;
  if (progress > 1) {
    progress = 1;
  }
  const x = startX + (endX - startX) * progress;
  const y = startY + (peakY - startY) * (4 * progress * (1 - progress));
  sun.style.left = `${x}px`;
  sun.style.top = `${y}px`;
  if (progress >= 1) {
    startTime = currentTime;
  }
  requestAnimationFrame(animateSun);
}
requestAnimationFrame(animateSun);