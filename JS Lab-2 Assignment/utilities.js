    // Function 1: Greeting Message (No return value)
    export function greet(name) {
        console.log(`Hello ${name}! Keep pushing your limits in JavaScript!`);
    }

    // Function 2: Convert Kilometers to Miles
    export function convertKmToMiles(km) {
        return km * 0.621371; // Conversion formula: 1 km = 0.621371 miles
    }

    // Function 3: Sum of Squares of Digits
    export function sumOfSquares(number) {
        return number
            .toString()
            .split('')
            .map(digit => parseInt(digit) ** 2) // Square each digit
            .reduce((sum, squared) => sum + squared, 0); // Sum all squared values
    }

    // Function 4: Check if a Number is Prime
    export function isPrime(num) {
        if (num < 2) return false; // Prime numbers start from 2
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
