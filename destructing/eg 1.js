// Example of array destructuring
const numbers = [1, 2, 3, 4, 5];

// Extracting values into variables
const [first, second, ...rest] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
