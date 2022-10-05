


function autoMakerFunction(theObjectPassedIn){
    theObjectPassedIn.make = "lexus"
     //These return the automaker 
}


const autoMaker = {
    make : "toyota",
    model: "camry",
    year: 2022

}

const auto = autoMaker.make 
console.log(auto)



const myAuto = autoMakerFunction(autoMaker);



const callAuto = autoMaker.make
console.log(callAuto)



function myFunc(theObject) {
    theObject.make = 'Toyota';
  }
  
  const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
  };
  
  // x gets the value "Honda"
  const x = mycar.make;
  console.log(x)
  
  // the make property is changed by the function
  myFunc(mycar);
  // y gets the value "Toyota"
  const y = mycar.make;
  console.log(y)