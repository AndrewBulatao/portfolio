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

// Dragging code
let isDragging = false;
let progress = 0;
function updateSunPosition() {
    const x = startX + (endX - startX) * progress;
    const y = startY + (peakY - startY) * (4 * progress * (1 - progress));
    sun.style.left = `${x}px`;
    sun.style.top = `${y}px`;
    sunReflection.style.left = `${x}px`;
}
function animateSun(currentTime) {
    // Dragging
    if (isDragging) {
        requestAnimationFrame(animateSun);
        return;
    }
    if (!startTime) {
        startTime = currentTime;
    }
    // Find how much time has passed
    const elapsedTime = currentTime - startTime;
    progress = elapsedTime / animationDuration;
    if (progress > 1) {
        progress = 1;
    }

    // Calculate
    // horizontal position
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

// Sun Dragging animation
sun.addEventListener("mousedown", () => {
    isDragging = true;
    document.body.style.userSelect = "none";
});
document.addEventListener("mousemove", (event) => {
    if (!isDragging) {
        return;
    }
    progress = (event.clientX - startX) / (endX - startX);
    if (progress < 0) {
        progress = 0;
    }
    if (progress > 1) {
        progress = 1;
    }
    updateSunPosition();
});
document.addEventListener("mouseup", () => {
    isDragging = false;
    startTime = performance.now() - (progress * animationDuration);
    document.body.style.userSelect = "";
});
requestAnimationFrame(animateSun);