new Map()
let bestBoxers = new Map()
bestBoxers.set(1, "The champion");
bestBoxers.set(2, "the runner");
bestBoxers.set(3,"nextwinner");
const getting =  bestBoxers.get(2)
 console.log(bestBoxers,    getting)

//Set
new Set()//This means that we can use it to quickly filter an array for unique members.
const  newArray = ["apple", "pears", "apple", "pears", "banana", "apple", "banana"]
const  neWListarray = new Set(newArray);
console.log(neWListarray)

//Spear Operator
const TopDentinations = ["Cyrus", "Silcoyvillie", "Taxas","Jos"]

const Tour = TourCities =(firstCity, secondCity, thirdCity)=>{
    console.log("I will  visit " + firstCity)
    console.log("then my next dentination will be " + secondCity)
    console.log("finally will arrived at so " + thirdCity)
    return  (firstCity, secondCity , thirdCity)
}

const finalLanding = TourCities(TopDentinations[0],TopDentinations[1], TopDentinations[2]);

const finalLandings = TourCities(... TopDentinations);//Spear OPerator
console.log(finalLandings)

//Rest Operator
const addTaxToPrices = TaxePrice = (taxsRate, ...TaxAdded) => {
    // console.log(`You goods after added tax of $${taxsRate} is $${TaxAdded}`);
    return (TaxAdded.map(item => (taxsRate) * item ))//taxRate holds the value of $1.5
}//while item holds the values for the goods which 25, 30 etc
let shoppedItem = addTaxToPrices((1.5), 25, 30 ,35, 40);
console.log(shoppedItem);

//Using Spead Operator and Rest OPerator to join arrays
const fruits = ["apples", "pears", "mangoes", "oranges"];
const berries = ["juices", "citrus", "bananas"]
const fruitsberries = [...fruits, ...berries];//Concanting
console.log(fruitsberries)

//Using sspear Operator to  add elments into  an array
const foods = ["onions", "beans"]
const foodAdded = [...foods, "yams", "plantain"]
console.log(foodAdded)

//Using Spear Operator and Rest OPerator to join Objects
const Car = { model:"camry", year:2022 }
const Toyota = {engine: true, "On": false }
const CarToyota = {...Car, ...Toyota};
console.log(CarToyota);


//Copying an Object to another one Using spead OPerator
const Motor1 = {
    speed:250,
    color:"pink"
}
const Motor2 = {...Motor1}
Motor1.speed = 300;
console.log(Motor1.speed, Motor2.speed)