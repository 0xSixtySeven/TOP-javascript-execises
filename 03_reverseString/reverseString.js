// const prompt = require("prompt-sync")();

// let word = prompt("Enter the word/words you want to reverse: ")

const reverseString = function (word) {
    return word.split("").reverse().join("");
    // There is no direct way of reversing a word so we need to apply 3 steps: String.split > .reverse > .join.
    // This will split the word in letters, reverse the orden and join the letters to a word again.

};

// Do not edit below this line
module.exports = reverseString;
