


const autoMakerFunction = (theObjectPassedIn) => {
    theObjectPassedIn.make = "lexus"
    theObjectPassedIn.model = "benz"
    theObjectPassedIn.year = 2023
     
}


const autoMaker = {
    make : "toyota",
    model: "camry",
    year: 2022

}

const auto = autoMaker.make 
console.log(auto)



const myAuto = autoMakerFunction(autoMaker);


// accessing the property of automaker and changing it
const callAuto = autoMaker.make
console.log(callAuto)
console.log(autoMaker.model)
console.log(autoMaker.year)




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


  const Sqaure = function num (number){
    return number * number
  }

const z = Sqaure(5)
console.log(z)