// create a "wrapper" function w/another function inside it
function parent() {
    let message = "Hello world";

    function child() {
        console.log(message);
    }

    // call the nested function
    child();
}

// try to access the message variable declared in the parent function
parent();
