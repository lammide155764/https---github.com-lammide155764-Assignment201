// math.js

// Function to add two numbers
export const add = (a, b) => a + b;

// Function to subtract two numbers
export const subtract = (a, b) => a - b;

// Function to multiply two numbers
export const multiply = (a, b) => a * b;

// Function to divide two numbers
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};
