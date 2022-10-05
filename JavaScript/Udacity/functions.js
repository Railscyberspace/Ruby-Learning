

const reVerseString = (reverseMe) => {
   let reversed = ''

    for(let i = reverseMe.length -1; i >= 0; i-- ){
        reversed += reverseMe[i];
    }
    return reversed;
}

const result = reVerseString("Rails");
console.log(result)


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
        if(integer % 2 === 0 ){
            console.log(x, "is divisble by", x)
        } else if(integer % 5 === 0){
            console.log(integer, "is divisible by", x)
        } else{
            console.log(integer)
        }
    }
    return x
}

const Y = isPrimeNumber(15)
console.log(Y)