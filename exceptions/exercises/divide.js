// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide(a, b){
    if (b === 0){
        throw new Error('Cannot divide by zero!')
    }
    return a/b;
};
// Your function should return the result of numerator / denominator.
console.log(divide(10, 2));
// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."
console.log(divide(10,0));
// Code your divide function here:
