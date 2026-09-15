const sections = document.querySelectorAll("section");
const header = document.querySelector(".header");
let currentSection = 0;
let isScrolling = false;
const scrollDuration = 1000;
/*
function scrollToSection(index) {
  if (index < 0 || index > 1 || isScrolling) {
    return;
  }
  isScrolling = true;
  currentSection = index;
  const startPosition = window.scrollY;
  const targetPosition = sections[index].offsetTop;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();
  function animateScroll(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, startPosition + distance * easedProgress);
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
  }
  requestAnimationFrame(animateScroll);
}*/
window.addEventListener("wheel", (event) => {
  if (event.target.closest(".chatbot-container")) {
    return;
  }
  if (isScrolling) {
    event.preventDefault();
    return;
  }
  const homeTop = sections[0].offsetTop;
  const aboutTop = sections[1].offsetTop;
  const currentScroll = window.scrollY;
  const tolerance = 10;
  if (Math.abs(currentScroll - homeTop) <= tolerance && event.deltaY > 0) {
    event.preventDefault();
    scrollToSection(1);
  } else if (Math.abs(currentScroll - aboutTop) <= tolerance && event.deltaY < 0) {
    event.preventDefault();
    scrollToSection(0);
  }
}, { passive: false });