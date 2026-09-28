const nav = document.querySelector(".nav");
const navHeader = document.querySelector(".header");
const sections = document.querySelectorAll("#about,#projects,#contact");
const navColors = {
  about: {
    background: "rgba(18,40,48,0.75)",
    text: "#d5f1f3",
    accent: "#72c9dc"
  },
  projects: {
    background: "rgba(15,16,30,0.75)",
    text: "#e0def5",
    accent: "#b3a8d8"
  },
  contact: {
    background: "rgba(0, 19, 6, 0.82)",
    text: "#c4d5c3",
    accent: "#718f73"
  }
};
function updateNavColor() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  let currentSection = sections[0];
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section;
    }
  });
  const colors = navColors[currentSection.id];
  navHeader.style.setProperty("--nav-background-color",colors.background);
  nav.style.setProperty("--nav-text-color",colors.text);
  nav.style.setProperty("--nav-accent-color",colors.accent);
}
window.addEventListener("scroll",updateNavColor);
updateNavColor();