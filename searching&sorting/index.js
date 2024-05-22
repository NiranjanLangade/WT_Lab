// Sort Form Submission Handler
document
	.getElementById("sortForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const input = document.getElementById("numbers").value;
		const inputArray = input.split(",").map(Number);
		const sortedArray = inputArray.sort((a, b) => a - b);
		document.getElementById(
			"result"
		).textContent = `Sorted Numbers: ${sortedArray.join(", ")}`;
	});

// Search Form Submission Handler
document
	.getElementById("searchForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const numbers = document
			.getElementById("numbers1")
			.value.split(",")
			.map(Number);
		const numberToSearch = Number(
			document.getElementById("numberToSearch").value
		);
		const isFound = numbers.includes(numberToSearch);
		const message = isFound
			? `${numberToSearch} was found in the list.`
			: `${numberToSearch} was not found in the list.`;
		document.getElementById("result").textContent = message;
	});
