// class Animal {
//     // constructor: color, energy
//     constructor(color, engergy){
//         isActive()
//         if(engergy > 0){
//             console.log(engergy)
//         }else if(engergy <= 0){
//             sleep()
//            }
//            sleep()
//            engergy += 20
//            console.log(engergy)
//         }
//     }
//     // isActive()
//         // if energy > 0, energy -=20, console log energy
//         // else if energy <= 0, sleep()
//     // sleep()
//         // energy += 20
//         // console.log energy

// class Cat extends Animal {
//     constructor(sound, canJumpHIgh, canClimbTrees, color, engergy){

//     }
//     // constructor: sound, canJumpHigh, canClimbTrees, color, energy
//      makeSound()
//         console.log (sound)
// }
// class Bird extends Animal {
//     // constructor: sound, canFly, color, energy
//     // makeSound()
//         // console.log sound
// }
// class HouseCat extends Cat {
//     // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // console.log(houseCatSound)
// }
// class Tiger extends Cat {
//     // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // console.log(tigerSound)
// }
// class Parrot extends Bird {
//     // constructor: canTalk, sound, canJumpHigh, canClimbTrees, color, energy
//     // makeSound(option)
//         // if (option)
//             // super.makeSound()
//         // if (canTalk)
//             // console.log("talking!")
// }

class Animal{
    constructor(color = "pink", energy = 100){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if(this.energy > 0){
            this.energy -= 0;
            console.log("Energy is decreasing, currently at:",this.energy)
        }else if(this.energy == 0){
            this.sleep();
        }
    }
     

sleep(){
    this.energy += 20;
    console.log("Energy is increasing, currently at: ", this.energy)
}
getColor(){
    console.log(this.color)
   }
}

class  Cat extends Animal {
    constructor(sound = "purr", canJumpHIgh = true, canClimbTree = true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canClimbTree = canJumpHIgh;
        this.canJumpHIgh = canJumpHIgh;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class Bird extends Animal{
    constructor(sound ="chirp", canFly = true, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly =canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class HouseCat extends Cat{
    constructor(tigerSound ="Roar", sound, canJumpHIgh, canClimbTree, color,energy){
        super(sound, canJumpHIgh, canClimbTree, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if(option){
        }
        console.log(this.tigerSound)
    }
   
}


class Tiger extends Cat {
    constructor(tigerSound = "roar", sound, canJumpHIgh, canClimbTree, color, energy){
        super(sound, canJumpHIgh, canClimbTree, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerSound)
    }
}

class Parrot extends Bird{
    constructor(canTalk = false, sound, canFly, color, energy){
        super(sound,canFly,color,energy);
        this.canTalk = canFly;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log("I'm a talking Parrot")
        }
    }
}

var polly = new Parrot(true);
var fiji = new Parrot(false);
polly.makeSound();
fiji.makeSound();

//Pink  color
// 100
polly.color;
polly.energy;

//energy is decreasing
polly.isActive();
var penguin = new Bird("shriek", false, "black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();
leo.makeSound(false);
leo.makeSound(true);

var cruudle = new Tiger();
cruudle.makeSound(false);
cruudle.makeSound(true);

