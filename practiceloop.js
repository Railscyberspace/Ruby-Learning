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
}

let myTrain = new Train("pink", true)
let mySecond = new Train("green0", false)
let myThird = new Train("pink", "No")
console.log(myTrain, mySecond, myThird)