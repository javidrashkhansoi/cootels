const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");
const body = document.body;
burger.addEventListener("click", () => {
	burger.classList.toggle("open");
	navigation.classList.toggle("open");
	body.classList.toggle("open");
});
window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		burger.classList.remove("open");
		navigation.classList.remove("open");
		body.classList.remove("open");
	}
});
function headerHeight() {
	const header = document.querySelector(".header");
	if (window.scrollY >= 120 && window.innerWidth > 992) {
		header.classList.add("scroll");
	} else {
		header.classList.remove("scroll");
	}
}
headerHeight();
window.addEventListener("scroll", headerHeight);
const spoilers = document.querySelectorAll(".spoiler");
if (spoilers.length > 0) {
	spoilers.forEach(spoiler => {
		const spoilerItem = spoiler.querySelectorAll(".spoiler__item");
		if (spoilerItem.length > 0) {
			spoilerItem.forEach(item => {
				const spoilerText = item.querySelector(".spoiler__text");
				item.addEventListener("click", () => {
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
					const height = spoilerText.scrollHeight;
					if (item.classList.contains("active")) {
						spoilerText.style.maxHeight = height + "px";
					}
				});
				window.addEventListener("resize", () => {
					const height = spoilerText.scrollHeight;
					if (item.classList.contains("active")) {
						spoilerText.style.maxHeight = height + "px";
					}
				});
				window.addEventListener("orientationchange", () => {
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
