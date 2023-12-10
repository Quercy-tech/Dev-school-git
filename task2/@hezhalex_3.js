function groupAnagrams(words) {
    let anagramArray = new Map;
    for (let word of words) {
        let sortedWord = word.split('').sort().join('');

        if (anagramArray.has(sortedWord)) {
            anagramArray.get(sortedWord).push(word);
        } else {
            anagramArray.set(sortedWord, [word]);
        }
    }

    return Array.from(anagramArray.values());
}