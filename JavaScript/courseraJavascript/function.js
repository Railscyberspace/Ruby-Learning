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
