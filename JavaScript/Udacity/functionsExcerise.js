// creates a line of * for a given length
function makeLine(length) {
    let line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
    // Let's build a huge string equivalent to the triangle
    var triangle = "";

    //Let's start from the topmost line
    let lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}

// test your code 
console.log(buildTriangle(10));


console.log("\n\n\n\n\n")
let message = " ";
const laugh = (num) =>{

    for(let i = 0; i < num; i++){
        message += "ha"
    }
    message += "!"
    return message;
}
const x  = laugh(10);
console.log(x)

