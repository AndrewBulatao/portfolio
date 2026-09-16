const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove",(e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  const element = document.elementFromPoint(e.clientX,e.clientY);
  if (!element) {
    return;
  }
  const section = element.closest("section");
  const calcifer = element.closest(".chatbot-container");
  const interactive = element.closest("a,button,.project-card,.sun,.chatbot-container");
  cursor.classList.remove("home-cursor","about-cursor","projects-cursor","contact-cursor","calcifer-cursor");
  if (calcifer) {
    cursor.classList.add("calcifer-cursor");
  } else if (section) {
    cursor.classList.add(`${section.id}-cursor`);
  }
  cursor.classList.toggle("hover",!!interactive);
});