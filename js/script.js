const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");
const body = document.body;
burger.addEventListener("click", () => {
	burger.classList.toggle("open");
	navigation.classList.toggle("open");
	body.classList.toggle("open");
});
