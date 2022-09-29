//To loop over  an array and assign each to a particular number


// list = ["rails", "ruby", "pearl", "kingsly"];
// list.reverse()
// //basically rails = 3, "kingsly = 2", pearl =0 , ruby 2 

// for(let i = 0; i < list.length; i++){
//      console.log(list[i], i)
//     }


// OOP

class Train{
     constructor(color, ligthOn){
  this.color = color;
  this.ligthOn = ligthOn
     }


     toggleLight(){
          this.ligthOn = !this.ligthOn
     }
     lightStatus(){
          console.log("Light on?", this.ligthOn)
     }
     getSelf(){
          console.log(this)
     }
     photoType(){
          let proto = Object.getPrototypeOf(this)
          console.log(proto)
     }
}

let myTrain = new Train("pink", true)
let mySecond = new Train("green", false)
let myThird = new Train("red", "No")
myTrain.toggleLight()
myTrain.lightStatus()
myTrain.getSelf()
myTrain.photoType()
console.log(myTrain, mySecond, myThird)




class HighSpeedTrain extends Train {
     constructor(pessengers, highSpeedOn, color, ligthOn){
          super(color, ligthOn);
          this.pessengers = pessengers;
          this.highSpeedOn = highSpeedOn;
     }

     toggleHighSpeed(){
          this.highSpeedOn = !this .highSpeedOn;
          console.log("High speed status:", this.highSpeedOn);
     }

     toggleLight(){
          super.toggleLight();
          super.lightStatus();
          console.log("Light are 100% Operational: ")
     }
}

let train5 = new Train("blue", false)
let highSpeed1 = new HighSpeedTrain(200, false, "green", true)
train5.toggleLight()
train5.lightStatus()