let removeFromArray = function (array, ...args) {  // ...args is the rest operator, it allows us to pass in an array of values
    return array.filter(val => !args.includes(val)) // array.filter() creates a new array with all elements that pass the test implemented by the provided function
    // includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate
    // !args.includes(val) is the test function, it returns true if the value is not in the args array
    // val is the current value being processed in the array
    // args is the array of values to remove from the array
}


// Do not edit below this line
module.exports = removeFromArray;
