const gridGeneratorButton = document.querySelector("#grid-generator");
const container = document.querySelector("#container");
let grid;

gridGeneratorButton.addEventListener('click', () => {
    grid = parseInt(prompt("Enter number of squares: ", 10));
    while (true) {
        if (grid > 0 && grid <= 100) {
            break;
        } else {
            grid = parseInt(prompt("Enter number of squares: ", 10));
        }
    }
    console.log(grid);
});

