export function addAndMult(a, b) {
    console.log(a + b, a * b);
}

export function sumOfLength(a, b) {
    console.log(a.length + b.length);
}

export function sumOfDigits() {
    let num = prompt("Enter a number");

    let thirdDigit = num % 10;
    let secondDigit = (num - thirdDigit) % 100;
    let thirdDigit = (num - secondDigit * 10 - thirdDigit) / 100;

    console.log(firstDigit + secondDigit + thirdDigit);
}