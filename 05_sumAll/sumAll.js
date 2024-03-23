const sumAll = function (start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        // The typeof operator returns a string indicating the type of the operand's value, in this case we use it to check if the input is a number, if it is not a number we return 'ERROR'
        // We use typeof to compare the type of the input to the string 'number'

        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }
    let sum = 0;
    if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    } else {
        for (let i = end; i <= start; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;