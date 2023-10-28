document.addEventListener("DOMContentLoaded", () => {
	const feedback = document.querySelector(".feedback");
	const rating = document.querySelector(".rating");
	const Choice = document.querySelector(".Choice");
	const submitBtn = document.querySelector("#btn");
	const rates = document.querySelectorAll(".rate");

	const submitting = () => {
		if (feedback.classList.contains("hidden")) {
			feedback.classList.remove("hidden");
			rating.classList.add("hidden");
		} else if (rating.classList.contains("hidden")) {
			rating.classList.remove("hidden");
			feedback.classList.add("hidden");
		}
	};

	const YourRating = () => {
		rates.forEach((rate) => {
			rate.addEventListener("click", () => {
				Choice.textContent = rate.innerHTML;
			});
		});
	};
	YourRating();
	submitBtn.addEventListener("click", submitting);
});
