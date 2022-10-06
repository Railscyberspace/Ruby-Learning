//Scope is the part of the program where a particular identifier, 
//such as a variable or a function name, is visible or accessible.

const bookSeeker = "James";
const book = "Great Expectations";
function library() {
  const librarian = "Julia"; 
    console.log(bookSeeker + " asked " + librarian + " for " + book);
    function classicLiterature() {
        const shelf = "Dickens"; 
        console.log( bookSeeker + " found " + book + " on the " + shelf + " shelf!");
    }
    classicLiterature();
}

const  result = library()
console.log(result);



// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
  // <-- 3. JavaScript engine looks here third
  const outerOuterVar = 'I am in the outerOuterFunction scope';
  function outerFunction() {
    // <-- 2. JavaScript engine looks here second
    const outerVar = 'I am in the outerFunction scope';
    function innerFunction() {
      // <-- 1. JavaScript engine looks here first
      const innerVar = 'I am in the innerFunction scope';
      console.log(globalVar);
    }
  }
}

const x = 5;
if (x <= 6) {
  const double = x * 2;
  console.log(double);
} else {
  const half = x / 2;
  console.log(half);
}