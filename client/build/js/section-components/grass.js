const grass = document.querySelector(".grass");

for (let i = 0; i < 500; i++) {
  const blade = document.createElement("div");
  blade.classList.add("grass-blade");

  const x = Math.random() * 100;
  const height = Math.random() * 80 + 30;
  const duration = Math.random() * 2 + 2;
  const delay = Math.random() * 2;

  blade.style.left = `${x}%`;
  blade.style.height = `${height}px`;
  blade.style.animationDuration = `${duration}s`;
  blade.style.animationDelay = `${delay}s`;
  grass.appendChild(blade);
}

const spiderLilies = document.querySelectorAll(".spider-lily");
spiderLilies.forEach((flower) => {
  const duration = Math.random() * 2 + 2;
  const delay = Math.random() * 2;
  flower.style.animationDuration = `${duration}s`;
  flower.style.animationDelay = `${delay}s`;
});

const forest = document.querySelector(".forest");
for (let i = 0; i < 30; i++) {
  const tree = document.createElement("div");
  tree.classList.add("forest-tree");
  tree.style.left = `${Math.random() * 105 - 2}%`;
  tree.style.height = `${Math.random() * 300 + 350}px`;
  tree.style.width = `${Math.random() * 100 + 80}px`;
  tree.style.opacity = `${Math.random() * 0.2 + 0.8}`;
  const trunk = document.createElement("div");
  trunk.classList.add("tree-trunk");
  tree.appendChild(trunk);
  const foliageCount = Math.floor(Math.random() * 6) + 7;
  for (let j = 0; j < foliageCount; j++) {
    const foliage = document.createElement("div");
    foliage.classList.add("tree-foliage");
    foliage.style.left = `${Math.random() * 80 + 10}%`;
    foliage.style.top = `${Math.random() * 55}%`;
    foliage.style.width = `${Math.random() * 100 + 80}px`;
    foliage.style.height = `${Math.random() * 45 + 35}px`;
    foliage.style.transform = `translate(-50%,-50%) rotate(${Math.random() * 40 - 20}deg)`;
    tree.appendChild(foliage);
  }
  forest.appendChild(tree);
}