// include node's built in fs (file system) module so we can read text files
const fs = require('fs');

// read the 2 text files and output the contents
var food = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log("We at this stuff \n");

var drinks = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log("We drank this stuff \n");
