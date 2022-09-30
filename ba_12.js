function frankenSplice(arr1, arr2, n) {
    let lArr = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        lArr.splice(n, 0, arr1[i]);
        n++;
    }
    return lArr;
}


frankenSplice([1, 2, 3], [4, 5, 6], 1);