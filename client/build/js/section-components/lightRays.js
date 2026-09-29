const lightRayContainer = document.querySelector(".about-light-rays");

if (lightRayContainer) {
	const raySettings = {
		minRays: 8,
		maxRays: 14,
		minWidth: 1.5,
		maxWidth: 6,
		minOpacity: 0.08,
		maxOpacity: 0.25,
		angle: 6
	};

	const randomRange = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const createLightRays = () => {
		lightRayContainer.innerHTML = "";

		const rayCount = randomInt(raySettings.minRays, raySettings.maxRays);

		for (let i = 0; i < rayCount; i++) {
			const ray = document.createElement("div");
			ray.classList.add("light-ray");

			const width = randomRange(raySettings.minWidth, raySettings.maxWidth);
			const opacity = randomRange(raySettings.minOpacity, raySettings.maxOpacity);
			const left = randomRange(-5, 95);
			const blur = randomRange(2, 5);
			const duration = randomRange(10, 20);
			const delay = randomRange(-20, 0);

			ray.style.width = `${width}vw`;
			ray.style.left = `${left}%`;
			ray.style.opacity = opacity;
			ray.style.setProperty("--ray-angle", `${raySettings.angle}deg`);
			ray.style.filter = `blur(${blur}px)`;
			ray.style.animationDuration = `${duration}s`;
			ray.style.animationDelay = `${delay}s`;

			lightRayContainer.appendChild(ray);
		}
	};

	createLightRays();
}

