// create a function w/o any closure
function openFunction() {
    // use var since the value will be changed
    var counter = 0;
    counter++;
    console.log(counter);
}

// execute the function twice => displays 1 every time as variable reinitialized to zero
openFunction();
openFunction();
