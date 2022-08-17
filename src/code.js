//Линейные алгоритмы

function additionAndMultiplication(a, b) {
    console.log(a + b, a * b);
}

module.exports.additionAndMultiplication = additionAndMultiplication;

function sumOfLength(a, b) {
    console.log(a.length + b.length);
}

module.exports.sumOfLength = sumOfLength;

function sumOfDigits(num) {
    let thirdDigit = num % 10;
    let secondDigit = ((num - thirdDigit) / 10) % 10;
    let firstDigit = (num - secondDigit * 10 - thirdDigit) / 100;

    console.log(firstDigit + secondDigit + thirdDigit);
}

module.exports.sumOfDigits = sumOfDigits;
