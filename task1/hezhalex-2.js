let numberOfDisks = 5;
let minimalMoves = towersOfHanoi(numberOfDisks);
function towersOfHanoi (disks) {
// Base case: If there's only one disk, it can be moved in a single step.
    if (disks <= 1) {
        return 1;
    } else {
        // Calcute number of moves to move top disks (disks - 1) to 2nd rod(auxiliary)
        const movesForLowerDisks = towersOfHanoi(disks - 1);

        // 1 move for largest disk to 3rd rod (target)
        // Then,  move (disks - 1) disks from the auxiliary rod to the target rod.
        // Finally, add the moves required for the lower disks and the move for the top disk.
        return 1 + 2 * movesForLowerDisks;
    }
}



console.log(`The minimal number of moves to win the game is: ${minimalMoves}`)