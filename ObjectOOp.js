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