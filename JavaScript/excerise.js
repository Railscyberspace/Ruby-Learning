const car ={
    engine: true,
    steering: true,
    speed: "slow"
}

const sportCar = Object.create(car);
sportCar.speed = "fast";
console.log("sport Car object: ", sportCar);

console.log(".............")
for(prop in sportCar){
    console.log(prop);
}

console.log("//////////////")
for(prop of Object.keys(sportCar)){
    console.log(prop, sportCar[prop]);
}




var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy()  {

    for (items of dairy) {        

console.log(items);    }}

logDairy(); 

const animal = {
    canJump: true    };
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

//  creating birdCan function and implementing for...of loop which include keys with value.

function birdCan() {

    for (items of Object.keys(bird)) {

        console.log(items , ": " , bird[items]) ;    }}

birdCan(); 

// invoking(calling) birdCan function.


// Task 3

//  creating animalCan function and implementing for...in loop, which will loop over all the properties including its prototype.
console.log("comihherererrrrrrrrrrrrr")
function animalCan() {

    for (props in bird) {

        console.log(props ,": ", bird[props]) ;     }}

animalCan(); 

// invoking(calling) animalCan function.

