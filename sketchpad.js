const gContainer = document.getElementById('gridContainer');
const gSize = document.getElementById('gridSize');


const rows = 16;
const cols = 16;
let isDrawing = false;

function grid(rows, cols) {
    for (let i = 0; i < rows; i++) {
        const gRows = document.createElement('div'); 
        gRows.className = 'gridRow';
        gContainer.appendChild(gRows);
        for (let j = 0; j < cols; j++) {
            const gCols = document.createElement('div'); 
            gCols.className = 'gridColumn'; // You can apply a CSS class if needed
            gRows.appendChild(gCols);
        }
    }
    applyHoverEffect();

};



function applyHoverEffect() {
    const gridCells = document.querySelectorAll('.gridColumn'); 

    gridCells.forEach(cell => {
        cell.addEventListener("mousedown", () => {
            isDrawing = true;
            cell.style.backgroundColor = randColor();
        });

        cell.addEventListener("mousemove", () => {
            if (isDrawing) {
            cell.style.backgroundColor = randColor();
          }
        });

        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    });
};

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}



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

            if (!isNaN(userInput) && userInput > 0 && userInput < 100) {
                break; // Exit the loop if a valid number is entered
            }

            alert("Please enter a valid positive number less than 100.");
        }

        // Valid input: update the grid size
        while (gContainer.firstChild) {
            gContainer.removeChild(gContainer.firstChild);
        }
        grid(parseInt(userInput), parseInt(userInput)); // Pass userInput as both rows and cols
    });
}
grid(16,16);

askUser();














