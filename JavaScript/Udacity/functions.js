

const reVerseString = (reverseMe) => {
   let reversed = ''

    for(let i = reverseMe.length -1; i >= 0; i-- ){
        reversed += reverseMe[i];
    }
    return reversed;
}

module.exports = reVerseString;



//
const laugh = (num) =>{
    let message = " ";
    for(let i = 0; i < num; i++){
        message += "ha"
    }
    message += "!"
    return message;
}
const x  = laugh(2);
console.log(x)



const isPrimeNumber = (integer) => {
    for(let x = 5; x < integer; x++){
        if(integer % x === 0 ){
            console.log(integer, "is divisble by", x)
        } else if(integer % x === 0){
            console.log(integer, "is not divisible by", x)
        } else if (integer != x === 0 && integer != x ===0){
            console.log(x)
        }
    }
    return x
}

const Y = isPrimeNumber(50)
console.log(Y)



// returns the sum of two numbers
function add(x, y) {
    return x + y;
  }
  
  
  // returns the value of a number divided by 2
  function divideByTwo(num) {
    return num / 2;
  }
  
  
  const sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
  const average = divideByTwo(sum);
  console.log(average)



  //The function rturn value is passes as the argument of the function
  function addTen(x) {
    return x + 10; //Value 12 is return
  }
  
  function divideByThree(y) {
    return y / 3; //the value 12 is divided by 3
  }
  
  const avs = addTen(2);
  console.log(divideByThree(avs));//4 is return as 12/3