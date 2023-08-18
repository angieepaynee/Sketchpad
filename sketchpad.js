const gContainer = document.getElementById('gridContainer');
const gSize = document.getElementById('gridSize');

const rows = 16;
const cols = 16;
let isDrawing = false;

function grid() {
    for (let i = 0; i < rows; i++) {
        const gRows = document.createElement('div'); // Create a new row element
        gRows.className = 'gridRow'; // You can apply a CSS class if needed
        gContainer.appendChild(gRows);
        for (let j = 0; j < cols; j++) {
            const gCols = document.createElement('div'); // Create a new column element
            gCols.className = 'gridColumn'; // You can apply a CSS class if needed
            gRows.appendChild(gCols);
        }
    }
};

grid();


function applyHoverEffect() {
    const gridCells = document.querySelectorAll('.gridColumn'); 

    gridCells.forEach(cell => {
        cell.addEventListener("mousedown", () => {
            isDrawing = true;
            cell.style.backgroundColor = "blue";
        });

        cell.addEventListener("mousemove", () => {
            if (isDrawing) {
            cell.style.backgroundColor = "blue";
          }
        });

        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    });
};
applyHoverEffect();


const popup = document.createElement('button');
popup.className = "gridSizePrompt";
gSize.appendChild(popup);
popup.textContent = "click me";

function askUser() {
    gSize.addEventListener("click", () => {
        let userInput;

        // Keep prompting until a valid number is entered
        while (true) {
            userInput = prompt("Choose a grid size: ");
            if (userInput === null) {
                // User clicked "Cancel" or closed the prompt
                return;
            }

            if (!isNaN(userInput) && userInput > 0 && userInput <= 100) {
                break; // Exit the loop if a valid number is entered
            }

            alert("Please enter a valid positive number less than or equal to 100.");
        }

        // Valid input: update the grid size
        while (gContainer.firstChild) {
            gContainer.removeChild(gContainer.firstChild);
        }
        grid(parseInt(userInput));
        gContainer.appendChild(gSize);
    });
}

askUser();














