function repeatStringNumTimes(str, num) {
    let str2 = "";
    for (let i = 0; i < num; i++) {
        if (num > 0) {
            str2 += str;
        }
    }
    return str2;
}

repeatStringNumTimes("abc", 3);