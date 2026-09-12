const water = document.querySelector(".water");
function createWaterShimmer() {
  const shimmer = document.createElement("div");
  shimmer.classList.add("shimmer-line");
  const randomY = Math.random() * 90;
  const randomX = Math.random() * 90;
  const randomWidth = Math.random() * 80 + 20;
  const randomHeight = Math.random() * 2 + 1;
  const randomDuration = Math.random() * 2 + 2;
  shimmer.style.top = `${randomY}%`;
  shimmer.style.left = `${randomX}%`;
  shimmer.style.width = `${randomWidth}px`;
  shimmer.style.height = `${randomHeight}px`;
  shimmer.style.animationDuration = `${randomDuration}s`;
  document.querySelector(".water-shimmer").appendChild(shimmer);
  shimmer.addEventListener("animationend", () => {
    shimmer.remove();
  });
}
setInterval(createWaterShimmer, 500);
water.addEventListener("click", (event) => {
  const ripple = document.createElement("div");
  ripple.classList.add("water-ripple");
  const waterRect = water.getBoundingClientRect();
  const clickX = event.clientX - waterRect.left;
  const clickY = event.clientY - waterRect.top;
  ripple.style.left = `${clickX}px`;
  ripple.style.top = `${clickY}px`;
  water.appendChild(ripple);
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
});