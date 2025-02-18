// Import functions from utilities.js
import { greet, convertKmToMiles, sumOfSquares, isPrime } from './utilities.js';

// Function 1: Greeting
console.log("\nFunction 1: Greeting");
greet("Group 3");

// Function 2: Unit Conversion (Kilometers to Miles)
console.log("\nFunction 2: Unit Conversion (Kilometers to Miles)");
console.log("10 km in miles:", convertKmToMiles(10).toFixed(2)); // Output: 6.21 miles

// Function 3: Sum of Squares of Digits
console.log("\nFunction 3: Sum of Squares of Digits");
console.log("Sum of squares of digits in 123:", sumOfSquares(123)); // Output: 14 (1² + 2² + 3²)

// Function 4: Prime Check
console.log("\nFunction 4: Prime Check");
console.log("Is 17 a prime number?", isPrime(17)); // Output: true
console.log("Is 20 a prime number?", isPrime(20)); // Output: false
