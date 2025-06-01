// script.js

let display = document.getElementById('display');

function appendToDisplay(input) {
    if (input === 'C') {
        clearDisplay();
    } else if (input === '=') {
        calculate();
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        // Evaluate the expression safely
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}