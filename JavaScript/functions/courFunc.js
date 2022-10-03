

function doubleIt(val){
    return {
        prop:val
    }
}

console.log(doubleIt(2))


function objectMaker(num){
    return num * 2
}
console.log(objectMaker(10))


function getTotal(a,b){
    return (a + b);
}
let num1 = 20
let num2 = 40

let total =  getTotal(num1, num2);
console.log(total)



var virtualPet = {
    sleepy : true,
    nap: function(){
        this.sleepy = false;
    }
}

console.log(virtualPet.sleepy)
console.log(virtualPet.nap())
console.log(virtualPet.sleepy)



console.log("\n\n\n")

function addTwoNum(a, b){
    console.log(a +b);
}

function randomNum(){
    return Math.floor((Math.random() * 10) + 1)
}

function specificNum(){return 42};
 
let useRandom = false;
let getNumber ;

if(useRandom){
    getNumber = randomNum
} else{
    getNumber = specificNum
}

console.log(addTwoNum(getNumber(), getNumber()))