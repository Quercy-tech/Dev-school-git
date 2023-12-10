function unpackSausages(truck) {
    let displayCounter = [];
    let sausageCount = 0;

    for (const box of truck) {
        for (const pack of box) {
            if (pack.startsWith("[") && pack.endsWith("]") && pack.length % 4 === 2) {
                // Check if the pack looks like a valid sausage pack
                const sausageType = pack.slice(1, 2) + " ";
                const sausageType2 = pack.slice(2, 3) + " ";
                const sausageType3 = pack.slice(3, 4) + " ";
                const sausageType4 = pack.slice(4, 5) + " ";// Extract sausage type
                const sausageCountInPack = pack.length / 6; // Calculate the number of sausages in the pack


                // Check if the pack is not damaged
                if (sausageCountInPack === 1 && sausageType == sausageType2 && sausageType == sausageType3 && sausageType == sausageType4) {
                    let exportType = sausageType.repeat(4);
                    displayCounter.push(exportType);

                    sausageCount++;
                    // Check if it's time for your reward
                    if (sausageCount % 5 === 0) {
                        displayCounter.pop();
                        // Remove the last sausage from the counter
                    }
                }
            }
        }
    }

    return displayCounter.join("").slice(0, -1);

}

const truck = [
    ["(-)", "[IIII]", "[))))]"],
    ["IuI", "[llll]"],
    ["[@@@@]", "UwU", "[IlII]"],
    ["IuI", "[))))]", "x"],
    []
];

const result = unpackSausages(truck);
console.log(result); // Output