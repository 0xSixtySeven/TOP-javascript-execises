const prompt = require('prompt-sync')();

let year = prompt("Enter a year: ");
const leapYears = function () {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) { // if year is divisible by 4 and not divisible by 100 or year is divisible by 400
        return true;
    } else {
        return false;
    }
}
console.log(leapYears());

// Do not edit below this line
module.exports = leapYears;
