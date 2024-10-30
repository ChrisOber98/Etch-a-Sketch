let boardSize = 16;

const container = document.querySelector("#container");

// Function to create the initial board
function createBoard(size) {
    // Clear the existing board
    container.innerHTML = ''; // This will remove all child elements

    // Loop through rows
    for (let i = 0; i < size; i++) {
        const newFlex = document.createElement("div");
        newFlex.style.display = "flex";

        // Loop through columns
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");

            newDiv.style.borderColor = "red";
            newDiv.style.borderWidth = "1px";
            newDiv.style.borderStyle = "solid";
            newDiv.style.width = "100px";
            newDiv.style.height = "100px";

            newDiv.addEventListener('mouseenter', () => {
                newDiv.style.backgroundColor = 'lightcoral'; 
                newDiv.style.borderColor = 'darkred';   
            });

            newFlex.append(newDiv);
        }

        container.append(newFlex);
    }
}

// Create the initial board
createBoard(boardSize);

// Function to reset the board with user input size
function resetBoard() {
    let inputSize = prompt("Size (max 100): ");

    // Convert the input size to a number
    inputSize = Number(inputSize);

    if (inputSize > 100 || isNaN(inputSize) || inputSize <= 0) {
        alert("SIZE TOO BIG DUDE! Please enter a number between 1 and 100.");
        return; // Exit the function if the size is invalid
    }

    // Create a new board with the specified size
    createBoard(inputSize);
}

// Get the button and set up the event listener
const button = document.getElementById("inputButton"); // Change selector to use ID without dot
button.addEventListener('click', resetBoard);
