require("./xyz.js"); // one module into another

const { calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");
const util = require("node:util");

console.log(data);
// console.log(util);

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
