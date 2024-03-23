const repeatString = function (word, times) {
    let string = "";
    for (let i = 0; i < times; i++) {
        string += word;  // string = string + word  // string = "hey" + "hey" + "hey"  
    }
    if (times < 0) return "ERROR";
    return string;
};

// Do not edit below this line
module.exports = repeatString;
