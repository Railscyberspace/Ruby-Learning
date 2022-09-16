
count = 1
while(count <= 10) {
    console.log(count, "missisissppi")
    count += 1
}


console.log("\n\n")
let num = 0
while(num <= 20){
    if(num % 5 === 0){
        console.log(num,  "is dividable by 3 so is " + "buzz")
    } else if (num % 3 === 0){
        console.log(num, "Is dividable by 5 so is " + "Fuzz")
    } else if (num % 3 === 0 &&  num  % 5 === 0) {
        // const pick = (value) => {
        //     return num
        // }
        // save = pick(num)
        // console.log(save)
        console.log(num,"is  dividable by 3 and 5 so is " + "fuzzBuzz")
    } else if (num !== 3 && num !== 5) {
        console.log(num)
    }
    num += 1
}


for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }


  // rewrite the while loop as a for loop

for(let x = 9; x >= 1; x-= 1){
console.log("Hello " + x)
}



//let factorial = 2 * 3  * 2
//console.log(factorial)
for(let factorial = 12; factorial < 3; factorial*= 1){
    console.log(factorial)
}

let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);


for(let sit = 0; sit < 100; sit ++){
    for(let row = 0; row < 25; row ++)
    console.log(sit + 1, row - 0);
}