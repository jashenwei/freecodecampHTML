function findLongestWordLength(str) {
    const len = str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
    return len.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))