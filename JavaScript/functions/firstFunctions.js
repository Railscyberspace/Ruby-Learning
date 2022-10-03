

function longestString(){
    let longest = " ";
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > longest.length){
            longest = arguments[i];
        }
    }
    return longest;
}

console.log(longestString(arguments[2], "good", 500, "welcome"))



const materials = [
    'Oxygen',
    'Helium',
    'Lithium',
    'Beryllium'
]
console.log(materials.map(material => material.length));



function mutation(arr){
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for(let i in test){
        if(target.indexOf(test[i]) < 0)
        return false;
    }
}

console.log(mutation("Alien", "line"))

// Arrow Function
const bob2 = (a) => a + 100;
console.log(bob2(3)) // Function is called here




