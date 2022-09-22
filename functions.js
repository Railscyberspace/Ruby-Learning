
function reverseString(reverseMe) {
    let reversed = "";
    for (let i = reverseMe.length - 1; i >= 0; i--) {
        reversed += reverseMe[i];
    }
    return reversed;
}

console.log(reverseString("Julia"));


let sounding= "" ; 
function laughing(num) {
    for (var x = 0 ; x < num ; x++) {
        sound = sounding + "ha" ;
    }
    sounding = sounding +"!"; 
    return sounding; 
}
console.log(laughing(3))

//Functional programming
let shoe = 100;
stateTax = 1.3;

function buyShoe(shoes,taxs){
    return (shoes * taxs)
}

let pay = buyShoe(shoe, stateTax)
console.log(pay)

// Using object in solution same problem
const purchase1 = {
    nikeShoes: 100,
    nyTax: 1.2,
    calculate: function(){ 
        save = (this.nikeShoes * this.nyTax)
        console.log("total cost of buying the shoes is", save)
        return save;
    },
}

results = purchase1.calculate()


//Using the this key word
const purchase2 = {
    nikeShoes: 200,
    nyTax: 1.2,
    calculate: function(){ 
        save = (this.nikeShoes * this.nyTax)
        console.log("total cost of buying the shoes is", save)
        return save;
    },
}

results = purchase2.calculate()
