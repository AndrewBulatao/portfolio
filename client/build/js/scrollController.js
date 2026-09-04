const sections = document.querySelectorAll("section");

let currentSection = 0;
let isScrolling = false;

const scrollDuration = 1000;

function scrollToSection(index) {
  if (index < 0 || index >= sections.length || isScrolling) {
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

    // Smooth easing
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(
      0,
      startPosition + distance * easedProgress
    );

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
  }

  requestAnimationFrame(animateScroll);
}

window.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (isScrolling) {
    return;
  }

  if (event.deltaY > 0) {
    scrollToSection(currentSection + 1);
  } else {
    scrollToSection(currentSection - 1);
  }
}, { passive: false });