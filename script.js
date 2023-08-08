const container = document.querySelector(".grid-container");
const grids = document.getElementById("grids");

setGrid(16);

let isDragging = false;

container.addEventListener("mousedown", function (e) {
	isDragging = true;
	if (e.target.classList.contains("cell")) {
		draw(e.target);
	}
});

container.addEventListener("mouseover", function (e) {
	if (isDragging) {
		if (e.target.classList.contains("cell")) {
			draw(e.target);
		}
	}
});

container.addEventListener("mouseup", function () {
	isDragging = false;
});

function setGrid(size) {
	grids.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grids.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size ** 2; ++i) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.setAttribute("draggable", false);
		container.appendChild(cell);
	}
}

function draw(cell) {
	cell.style.backgroundColor = "blue";
}
