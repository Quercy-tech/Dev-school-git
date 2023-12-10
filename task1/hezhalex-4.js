let primeNumber = 1; // Our number

function isPrime(num) {
    res = true; // Initializing the result variable
    n=2; // Initializing the number on which we will divide

    if (num > 1) { // check if number is greater than 1
        while (n < num) {
            if (num % n === 0) {
                res = false;
                return res;
            }
            n++;
        }
        return res; // the number is prime

    } else if (num < -1) { // check if number is less than -1
        n=-2
        while (n > num) {
            if (num % n === 0) {
                res = false;
                return res;
            }
            n--;
        }
        return res; // the number is prime

    } else if (-1<= num <=1) { // check if number is between -1 and 1
        res = false;
        return res;
    }




}

console.log(isPrime(primeNumber));