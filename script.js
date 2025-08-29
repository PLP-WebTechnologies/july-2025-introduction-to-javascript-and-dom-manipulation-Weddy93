// script.js

// Part 1: Variable declarations and conditionals
let textElement = document.getElementById('text');
let changeTextButton = document.getElementById('changeTextButton');
let countButton = document.getElementById('countButton');

// Function to determine the text that will be displayed
function getNewText() {
    let currentText = textElement.innerHTML;
    if (currentText === "This is a sample project demonstrating JavaScript capabilities.") {
        return "The text has been changed!";
    } else {
        return "This is a sample project demonstrating JavaScript capabilities.";
    }
}

// Event Listener for Change Text Button
changeTextButton.addEventListener('click', function() {
    textElement.innerHTML = getNewText();
});


// Part 2: At least 2 custom functions
function countToFive() {
    let count = 1;
    while (count <= 5) {
        console.log(count);
        count++;
    }
}

function addNumbersToList() {
    let numberList = document.getElementById('numberList');
    for (let i = 1; i <= 5; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `Number: ${i}`;
        numberList.appendChild(listItem);
    }
}

// Event Listener for Count Button
countButton.addEventListener('click', function() {
    countToFive(); // This will log the numbers 1 through 5 to the console
    addNumbersToList(); // This will add numbers 1 through 5 to the list in the DOM
});


