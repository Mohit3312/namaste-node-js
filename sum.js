// Module protects their variables and functions from leaking

console.log("Sum Module Executed");

z = "Hello World";

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

module.exports = { calculateSum, x };
