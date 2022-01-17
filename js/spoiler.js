const spoilers = document.querySelectorAll(".spoiler");
const width = window.innerWidth;
if (spoilers.length > 0) {
	spoilers.forEach(spoiler => {
		const spoilerItem = spoiler.querySelectorAll(".spoiler__item");
		if (spoilerItem.length > 0) {
			spoilerItem.forEach(item => {
				const spoilerTitle = item.querySelector(".spoiler__title");
				const spoilerText = item.querySelector(".spoiler__text");
				spoilerTitle.addEventListener("click", () => {
					const height = spoilerText.scrollHeight;
					if (item.classList.contains("active")) {
						item.classList.remove("active");
						spoilerText.style.maxHeight = "0";
					} else {
						spoilerItem.forEach(si => {
							si.classList.remove("active");
							si.querySelector(".spoiler__text").style.maxHeight = "0";
						});
						item.classList.add("active");
						spoilerText.style.maxHeight = height + "px";
					}
				});
				spoilerText.addEventListener("DOMSubtreeModified", () => {
					spoilerItem.forEach(si => {
						si.classList.remove("active");
						si.querySelector(".spoiler__text").style.maxHeight = "0";
					});
				});
				document.addEventListener("click", (event) => {
					if (!event.target.closest(".spoiler")) {
						spoilerItem.forEach(si => {
							si.classList.remove("active");
							si.querySelector(".spoiler__text").style.maxHeight = "0";
						});
					}
				});
			});
		}
	});
}
