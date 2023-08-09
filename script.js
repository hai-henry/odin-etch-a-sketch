const container = document.querySelector(".grid-container");
const grids = document.getElementById("grids");
const size = document.getElementById("slider");

setGrid(16);

size.addEventListener("input", function () {
	clearGrid();
	const updateSize = parseInt(size.value);
	setGrid(updateSize);
});

function clearGrid() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function setGrid(size) {
	grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grids.style.gridTemplateRows = `repeat(${size},  1fr)`;
	for (let i = 0; i < size ** 2; ++i) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.setAttribute("draggable", false);
		draw();
		container.appendChild(cell);
	}
}

function color(cell) {
	cell.style.backgroundColor = document.getElementById("color-picker").value;
}

function draw() {
	let isDragging = false;

	container.addEventListener("mousedown", function (e) {
		isDragging = true;
		if (e.target.classList.contains("cell")) {
			color(e.target);
		}
	});

	container.addEventListener("mouseover", function (e) {
		if (isDragging) {
			if (e.target.classList.contains("cell")) {
				color(e.target);
			}
		}
	});

	container.addEventListener("mouseup", function () {
		isDragging = false;
	});
}
