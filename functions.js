
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
    sounding = sounding+"!"; 
    return sounding; 
}


console.log(laughing(3))