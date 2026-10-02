// Module protects their variables and functions from leaking

z = "Hello World";

var x = "Hello World";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

console.log(module.exports);

module.exports = { calculateSum, x };

// module.exports.calculateSum = calculateSum;
// module.exports.x = x;
