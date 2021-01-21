// include node's file system library
const fs = require('fs')

// read & display food list
// because this is asynchronous, add a 3rd callback parameter
// this parameter is an anonymous function that either returns an error or the text file contents
let food = fs.readFile('food.txt', 'utf8', (err, food) => {
    console.log(food);
});

console.log("We ate this stuff \n");

let drinks = fs.readFile('drinks.txt', 'utf8', (err, drinks) => {
    console.log(drinks);
});

console.log("We drank this stuff \n");
