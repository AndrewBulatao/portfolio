const sun = document.querySelector(".sun");
const sunReflection = document.querySelector(".sun-reflection");

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
  // Find how much time has passed
  const elapsedTime = currentTime - startTime;
  let progress = elapsedTime / animationDuration;
  if (progress > 1) {
    progress = 1;
  }

  // Calculate
  
  //horizontal position
  const x = startX + (endX - startX) * progress;
  // vertical position to create an arc
  const y = startY + (peakY - startY) * (4 * progress * (1 - progress));
  
  // Move the sun across the screen
  sun.style.left = `${x}px`;
  sun.style.top = `${y}px`;
  // Move the reflection underneath the sun
  sunReflection.style.left = `${x}px`;
  // Restart the animation when the sun reaches the end
  if (progress >= 1) {
    startTime = currentTime;
  }
  
  // Continue the animation
  requestAnimationFrame(animateSun);
}
requestAnimationFrame(animateSun);