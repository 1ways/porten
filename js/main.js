$(function () {
	const searchBtn = document.querySelector(".search-btn");
	const searchInput = document.querySelector(".search__input");
	const searchOption = document.querySelector(".option__search");

	searchBtn.addEventListener("click", () => {
		searchInput.classList.toggle("show");
		searchOption.classList.toggle("show");
	});

	document.body.addEventListener("click", e => {
		const target = e.target;
		console.log(target);
		if (
			!target.classList.contains("search-btn") &&
			!target.classList.contains("search__input") &&
			!target.classList.contains("option__search") &&
			!target.classList.contains("option__img")
		) {
			searchInput.classList.remove("show");
			searchOption.classList.remove("show");
		}
	});

	document.addEventListener("keydown", e => {
		if (e.code == "Enter" && searchInput.classList.contains("show")) {
			searchInput.classList.remove("show");
			searchOption.classList.remove("show");
		}
	});
});
