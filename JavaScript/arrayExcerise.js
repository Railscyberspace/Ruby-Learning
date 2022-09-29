

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(){
    for(var dairying of dairy){
        console.log(dairying);
    }
}

logDairy();


console.log("\n\n\n\n")
const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
  bird.hasFeathers = true;

console.log("\n\n\n\n\n\n prop of loop")
  function birdCan(){
  for(prop of Object.keys(bird)){
    console.log(prop,":", bird[prop])
  }
}

birdCan();


console.log("\n\n\n\n\n\n next line")
  function animalCan(){
  for(prop in bird){
    console.log(prop, " : ", bird[prop]);
  }
}

animalCan()