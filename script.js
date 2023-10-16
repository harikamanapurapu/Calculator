 //Script.js



// Initialize variables to store references and input values
let display = document.getElementById('display');
let input = '';
let result = ''; // Store the result of the previous calculation

// Function to append input values to the display
function appendToDisplay(value) {
    // Check if the display shows 'Error'; clear it if it does
    if (display.value === 'Error') {
        display.value = ''; // Clear the display after an error
        input = ''; // Also clear the input
    }
    input += value; // Append the provided value to the input
    display.value = input; // Update the display with the input
}

// Function to clear the display and reset input and result
function clearDisplay() {
    input = ''; // Clear the input
    result = ''; // Clear the result
    display.value = ''; // Clear the display
}

// Function to handle operators (+, -, *, /)
function operate(operator) {
    // Check if the input is not empty, the last character is an operator, and there is no error
    if (input !== '' && '+-*/'.includes(input.charAt(input.length - 1)) && input !== 'Error') {
        input = input.slice(0, -1); // Remove the last character (an operator)
    }
    input += operator; // Append the provided operator to the input
    display.value = input; // Update the display with the modified input
}

// Function to calculate and display the result
function calculate() {
    try {
        result = eval(input); // Evaluate the input as an expression
        display.value = result; // Update the display with the result
        input = result.toString(); // Use the result as the new input (for potential further calculations)
    } catch (error) {
        display.value = 'Error'; // If there's an error during evaluation, display 'Error'
    }
}

