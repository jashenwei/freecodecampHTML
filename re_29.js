let sampleWord = "astronaut";
let pwRegex = /(?=\w{4,6})(?=\D+\d{2})/gi; // Change this line
let result = pwRegex.test(sampleWord);