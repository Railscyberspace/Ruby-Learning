
let decimal = Math.random();
console.log(decimal); //Generate number between 0.1 to 0.99

let roundUp = Math.ceil(0.6);
console.log(roundUp);//these method round up to the nearest integer.
//How to to use the round number to get an integer

let maths = Math.random() * 10;
console.log(maths)

let ceiling = Math.ceil(maths);
console.log(ceiling);

//creating arrary and object litral 
let arrClothes = [];
arrClothes.push("jean")
arrClothes.push("shirt")
arrClothes.push("white-shirt")
arrClothes.push("red-trousher")
arrClothes.push("black-shirt")
console.log(arrClothes[3])


let favCar = {}
favCar.color = "pink";
favCar.convertiable = true;
console.log(favCar);
//Object and methods

let car = {};
car.mileage = 58746;
car.color = "pink"

car.turnOnKey = function(){
    console.log("engin is On")
}

car.changeGear = function(){
    let gears = [1, 2, 3, 4]
    return gears
}
result = car.changeGear()
console.log(result)
