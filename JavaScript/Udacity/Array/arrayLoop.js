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



const words = ["cat", "in", "hat"];
words.forEach(function(word, num, all){
    console.log("words of string " + num + " is " + all.toString())
})


const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299,36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

const miniTest = [12, 29, 11, 3]
test.forEach(function(allDivisble, notDivisa){
    if(allDivisble  % 3 === 0 ){;
         test[notDivisa] = test[notDivisa] + 100;
     
    }   
      console.log(test)
    
})

test.forEach(function (item, index) {
    if (item % 3 === 0) {
      test[index] = test[index] + 100;
    }
  });
  console.log(test);


  test.forEach(function (item, index) {
    if (item % 3 === 0) {
      console.log("Element at index " + index + " is divisible by 3");
      test[index] = test[index] + 100;
     } else {
       console.log("Element " + item + " is not divisible by 3");
    } 
  });