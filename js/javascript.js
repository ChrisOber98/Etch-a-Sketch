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

createBoard(boardSize);

function resetBoard() {
    let inputSize = prompt("Size (max 100): ");

    inputSize = Number(inputSize);

    if (inputSize > 100 || isNaN(inputSize) || inputSize <= 0) {
        alert("SIZE TOO BIG DUDE! Please enter a number between 1 and 100.");
        return;
    }

    createBoard(inputSize);
}

const button = document.getElementById("inputButton");
button.addEventListener('click', resetBoard);
