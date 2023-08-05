const container = document.querySelector(".grids");

for (let row = 0; row < 16; ++row) {
	for (let column = 0; column < 16; ++column) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		container.appendChild(cell);
	}
}

const gridSelection = document.querySelector(".grids");
gridSelection.addEventListener("mouseover", () => {
	draw();
});

function draw() {
	const cellSelection = document.querySelectorAll(".cell");
	cellSelection.forEach((cell) => {
		cell.addEventListener("click", () => {
			cell.classList.add("test");
		});
	});
}
