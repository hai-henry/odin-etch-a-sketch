const container = document.querySelector(".grid-container");
const grids = document.getElementById("grids");

setGrid(20);

function setGrid(size) {
	grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	for (let row = 0; row < size; ++row) {
		for (let column = 0; column < size; ++column) {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			container.appendChild(cell);
		}
	}
}

container.addEventListener("mouseover", () => {
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
