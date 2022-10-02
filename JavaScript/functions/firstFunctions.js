

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
console.log(materials.map(material => material.length))