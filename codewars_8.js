const quarterOf = (month) => {
    let quar;
    switch (month) {
        case 1: case 2: case 3:
            quar = 1;
            break;
        case 4: case 5: case 6:
            quar = 2;
            break;
        case 7: case 8: case 9:
            quar = 3;
            break;
        case 10: case 11: case 12:
            quar = 4;
            break;

        default:
            return "There is no such month.";
    }
    return quar;
}
console.log(quarterOf(10));