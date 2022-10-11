

const test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299,36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
myArray = test.map(function(elem){
    if(elem % 3 === 0)
    elem = elem + 100;
    console.log(elem)
    return elem;
    
})

console.log("\n\n\n\n\ Hello")
for(let i = 0; i <= test.length; i++){
    if(test[i] % 3 === 0){
        console.log(test[i]= test[i] + 100)
    }
}

const myArrays = [1, 2, 3, 4, 5];
for (let i = 0; i < myArrays.length; i = i + 2) {
  console.log(myArrays[i]);
     if (i === 2) {
   break;
  }
}

const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
const totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
console.log(totals);


    const total = bills.map(function(total){
    total *= 1.15
        return  Number(total).toFixed(2)
 })  
 console.log(total)
//[57.76, 21.99, 39.11, 115.13, 13.97, 11.38, 33.48, 14.94, 11.5, 114.1, 117.53, 115.11, 7.79, 2.55]

