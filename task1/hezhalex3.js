function findNb(m) {
    let n = 1; // Start with the first cube
    let volumeSum = 0; // Initializing the sum of volumes

    while (volumeSum < m) {
        volumeSum += Math.pow(n, 3);
        if (volumeSum === m) {
            return n;
        }
        n++;
    }

    return -1; // If no such n exists
}

// Example usage:
console.log(findNb(91716553919377));