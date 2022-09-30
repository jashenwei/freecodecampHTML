function largestOfFour(arr) {
    const arrMax = [];
    for (let i = 0; i < arr.length; i++) {
        let lNum = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > lNum) {
                lNum = arr[i][j];
            }
        }
        arrMax[i] = lNum;
    }
    return arrMax;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
