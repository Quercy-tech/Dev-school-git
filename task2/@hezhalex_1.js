function largestRadialSum(arr, d) {
    const n = arr.length;
    let maxHonorSum = -Infinity;

    for (let i = 0; i < n / d; i++) {
        let honorSum = 0;

        for (let j = i; j < n; j += n / d) {
            honorSum += arr[j];
        }
        maxHonorSum = Math.max(maxHonorSum, honorSum);
    }
    return maxHonorSum;
}