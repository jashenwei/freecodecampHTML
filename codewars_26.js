var countSheep = function (num) {
    if (num === 0) {
        return "";
    } else if (num > 0) {
        return countSheep(num - 1) + num + " sheep...";
    }
}
console.log(countSheep(2));