require("./xyz.js"); // one module into another
const { calculateSum } = require("./sum");

var name = "Namaste NodeJS";

var a = 10;
var b = 20;
var x = 100;

calculateSum(a, b);

console.log(x);
