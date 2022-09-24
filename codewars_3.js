function getGrade(s1, s2, s3) {
    const sum = s1 + s2 + s3;
    const avg = (sum / getGrade.length);
    return (avg >= 90 && avg <= 100) ? 'A' :
        (avg >= 80 && avg < 90) ? 'B' :
            (avg >= 70 && avg < 80) ? 'C' :
                (avg >= 60 && avg < 70) ? 'D' : 'F';

}
console.log(getGrade(42, 82, 20))

//оценка среднее-ариф.