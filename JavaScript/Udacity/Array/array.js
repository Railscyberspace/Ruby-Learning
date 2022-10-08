
//New array
const new_array  = new Array()
console.log(new_array)

const setting_array = [];
console.log(setting_array)

//Existed Array
const donuts = ["glazed", "chocolate frosted", "Boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];
console.log(donuts[1] = "juice donut");//Replacing an element in the arrary
console.log(donuts)

console.log(donuts.length)//getting the total elements in the array


//excerise
const udacityFamilyArray= ["julian",  "James", "Rails"]
console.log(udacityFamilyArray)

const crewFilm = ["Mal","Zoe", "Wash", "Inara", "Jayne", "Kaylee"];
console.log(crewFilm);

//excerise
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
console.log(prices[0] * 2, [2] * 2, [6] * 2)
console.log(prices [2] * 2)
console.log(prices [6] * 2)

for (let index = 0; index < prices.length; index++){
    //change the value of first element
    if (index === 0) {
      prices[index] = prices[index] * 2;
    }
    //change the value of third element
    else if (index === 2) {
      prices[index] = prices[index] * 2;
    }
    //change the value of seventh element
    else if (index === 6) {
      prices[index] = prices[index] * 2;
    }
  }
  console.log(prices);