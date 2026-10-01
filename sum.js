// Module protects their variables and functions from leaking

console.log("Sum Module Executed");

export var x = "Hello World";

export function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

// module.exports = { x, calculateSum };
