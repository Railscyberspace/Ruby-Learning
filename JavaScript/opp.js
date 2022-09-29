

const weather = {
    height:function(a , b){
        save = ` the total will be of the heat is,${a * b}`
        console.log("testing the weather")
        return save;
    }
}
 
const temp = {
    height:function(c, d){
        cal = `the total height will be, ${c * d}`
        console.log("the temperature is hight")
        return cal
    }
}


console.log(weather.height(2, 5))

console.log(temp.height(2, 10))

function getAllWeather(calculat){
      console.log(calculat.height())
}

console.log(getAllWeather(temp))

console.log(getAllWeather(weather))



// create your classes here
class House {
    colors(){
        console.log("plaint pink")
    }
}

class roomOne extends House{
colors(){
    super.colors()
    console.log("plaint red colors")
}
  }
class roomTwo extends House{
colors(){
    console.log("Green plaint needed")
} 
  }

  let mainHouse = new House();
  let firstRoom = new roomOne()
  let nextRoom = new roomTwo()
 
  mainHouse.colors()
  nextRoom.colors()
 firstRoom.colors()

 //construct

 let date = new Date()
 console.log(date)

function iceCream(flavor){
    this.flavor = flavor;
    this.flavor = function(){
        console.log(`the ${this.flavor} icecream as melted`)
    }
}

let kfcIceCream = new iceCream("coldStone")
let thePlaceIceCream = new iceCream("WhiteIcecream")
console.log(kfcIceCream);
console.log(thePlaceIceCream);


// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();