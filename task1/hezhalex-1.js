let inputNumber = 10;
let result = sumMultiples(inputNumber);
function sumMultiples(number) {
    // Check if the number is negative, and if so, return 0
    if (number < 0) {
        return 0;
    }

    let sum = 0;

    // Iterate through numbers from 1 to (Inputnumber - 1)
    for (let i = 1; i < number; i++) {
        // Check if the current number is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            // Add the multiple to the sum
            sum += i;
        }
    }

    return sum;
}

// Test the function with an example

console.log(`The sum of multiples of 3 or 5 below ${inputNumber} is: ${result}`);