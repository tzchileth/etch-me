const gridGeneratorButton = document.querySelector("#grid-generator");
const container = document.querySelector("#container");
let clearButton = document.createElement("button");
let boxes;
let grid;

gridGeneratorButton.addEventListener('click', () => {
    grid = parseInt(prompt("Enter number of squares: ", 10));
    while (true) {
        // make sure grid is a number
        while (!Number.isInteger(grid) || grid < 1) {
            grid = parseInt(prompt("Enter number of squares: ", 10));
        }
        if (grid > 0 && grid <= 100) {
            break;
        } else {
            grid = parseInt(prompt("Enter number of squares: ", 10));
        }
    }
    container.style.width = `${18 * grid}px`;

    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            let box = document.createElement("div");
            box.classList.toggle('active');
            box.style.cssText = 'background-color:blue;border:1px solid brown;height:16px;width:16px;';
            container.appendChild(box);
        }
    }

    clearButton.setAttribute('id', 'clear');
    clearButton.innerText = "Clear";
    container.appendChild(clearButton);
    clearButton.classList.toggle('visible')
    clearButton.classList.remove('invisible')
    gridGeneratorButton.disabled = true;
    colorMe();
});

// change sketchpad color 
function colorMe() {
    boxes = document.querySelectorAll(".active");
    boxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256); // red
            let g = Math.floor(Math.random() * 256); // green
            let b = Math.floor(Math.random() * 256); // blue
            let a = Math.random().toFixed(1);
            box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
        });
    });
}

// clear sketch pad
clearButton.addEventListener('click', () => {
    boxes = document.querySelectorAll(".active");
    boxes.forEach((box) => box.remove());
    clearButton.classList.toggle('invisible')
    gridGeneratorButton.disabled = false;
});
