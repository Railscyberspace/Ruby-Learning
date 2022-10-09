const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
  donuts[i] = donuts[i].toLocaleUpperCase() +  " hole".toLocaleUpperCase();
    
}

console.log(donuts)

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();

});


const myArray = ["A", "B", "C", "D"];

function myAwesomeFunction(element, index, array) {
  console.log("Element: ", element);
  console.log("Index: ", index);
  console.log("Array: ", array);
}

myArray.forEach(myAwesomeFunction);
