// const prompt = require("prompt-sync")();

// let fahrenheit = prompt("Enter a temperature in Fahrenheit: ");
const convertToCelsius = function (fahrenheit) {
  // when we want to round to 1 decimal we use the Math.round() method
  return Math.round((fahrenheit - 32) * 5 / 9 * 10) / 10;
};
console.log(convertToCelsius());

// let celsius = prompt("Enter a temperature in Celsius: ");
const convertToFahrenheit = function (celsius) {
  return Math.round((celsius * 9 / 5 + 32) * 10) / 10;
};
console.log(convertToFahrenheit());
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
