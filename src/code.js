//Линейные алгоритмы

function additionAndMultiplication(a, b) {
    console.log(a + b, a * b);
}

module.exports.additionAndMultiplication = additionAndMultiplication;

function sumOfLength(a, b) {
    console.log(a.length + b.length);
}

module.exports.sumOfLength = sumOfLength;

function inputSumOfDigits() {
    let num = prompt("Enter a three-digit number:");
}

function sumOfDigits(num) {
    let thirdDigit = num % 10;
    let secondDigit = ((num - thirdDigit) / 10) % 10;
    let firstDigit = (num - secondDigit * 10 - thirdDigit) / 100;

    console.log(firstDigit + secondDigit + thirdDigit);
}

module.exports.sumOfDigits = sumOfDigits;

//Условия

function max(a, b) {
    let max = a;

    if(b > max) {
        max = b;
    } 

    console.log(max);
}

module.exports.max = max;

function inputWhatMonth() {
    let num = prompt("Enter a number from 1 to 12:");
}

function whatMonth(num) {
    switch (num) {
        case 1: 
            console.log("January");
        case 2: 
            console.log("Febuary");
        case 3: 
            console.log("March");
        case 4: 
            console.log("April");
        case 5: 
            console.log("May");
        case 6: 
            console.log("June");
        case 7: 
            console.log("July");
        case 8: 
            console.log("August");
        case 9: 
            console.log("September");
        case 10: 
            console.log("October");
        case 11: 
            console.log("November");
        case 12: 
            console.log("December");
    } 
}

module.exports.whatMonth = whatMonth;