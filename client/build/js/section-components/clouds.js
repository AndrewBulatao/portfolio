const clouds = document.querySelectorAll(".cloud");
const cloudPositions = [
  8,
  20,
  32,
  44
];
function randomizeCloud(cloud, index) {
  const randomDuration = Math.random() * 20 + 30;
  const randomDelay = Math.random() * 8;
  const cloudY = cloudPositions[index];
  cloud.style.animation = "none";
  cloud.style.opacity = "0";
  cloud.style.left = "-450px";
  cloud.style.top = `${cloudY}%`;
  setTimeout(() => {
    cloud.style.animation = `cloudMove ${randomDuration}s linear`;
    cloud.style.opacity = "1";
  }, randomDelay * 1000);
}
clouds.forEach((cloud, index) => {
  cloud.addEventListener("animationend", () => {
    randomizeCloud(cloud, index);
  });
  randomizeCloud(cloud, index);
});

function createCloud() {
  const cloud = document.createElement("div");
  const randomY = Math.random() * 40 + 5;
  const randomDuration = Math.random() * 20 + 30;
  cloud.classList.add("cloud");
  cloud.style.top = `${randomY}%`;
  cloud.style.left = "-450px";
  cloud.style.animation = `cloudMove ${randomDuration}s linear`;
  document.querySelector("#home").appendChild(cloud);
  cloud.addEventListener("animationend", () => {
    cloud.remove();
  });
}
setInterval(createCloud, 5000);