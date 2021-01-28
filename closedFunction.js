// rewrite the openFunction.js file  method w/a closure
function closedFunction() {
    var counter = 0;

    // need to add a 2nd variable to use a closure here
    var increment = function() {
        counter++;
        console.log(counter);
    }

    return increment;
}

// execute the closed function mulitple times. Set a variable equal to the function, then call it twice.
var countMe = closedFunction();

for (var i = 0; i < 11; i++) {
    countMe();
}
/*countMe();
countMe();*/

