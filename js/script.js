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
