function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    } else {
        return [];
    }

};
console.log(rangeOfNumbers(1, 5));