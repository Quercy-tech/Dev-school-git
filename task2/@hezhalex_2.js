function findCenterIndex(arr) {
    for (let i = 0; i < arr.length; i++) {

        let leftSide = 0;
        let rightSide = 0;

       leftSide = arr.slice(0,i).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
       rightSide = arr.slice(i+1, arr.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (leftSide === rightSide) {
            return i;
        }
    }

    return -1; // Return -1 if no such index is found
}

console.log(findCenterIndex([20,10,-80,10,10,15,35]));  // Output
