//forEach Method
const  fruits = ["apple", "mangoes", "pears", "oranges", "banana"]
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)
    for(let i = 0; i < fruit.length; i++)
    console.log(fruit[i], i)

}
fruits.forEach (appendIndex)



const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(fruit, index) {
    console.log(`${index}. ${fruit}`);
});

//filter method
const num = [ 5, 10, 20, 25, 35]
num.filter(function(nums){
    save =  nums > 20
       return save;
})

console.log(num)


//map method
const list = [0,10,20,30,40, 50].map( function(num) {
    return num / 10
})

const result = [];//Here created an empty  arrays 
const drone = { //Objected is created
    speed: 100,
    color:"pink"
}

const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key){
       result.push(key, drone[key]) //the object is push  to the empty array.
})

console.log(result)


//This means that we can use it to quickly filter an array for unique members.
//Set Methos
const repetitiveFriuts = ["apples", "pears", "banana", "apples", "pears", "banana", "mangoes", "lemon"]
const uniqueFruits = new Set(repetitiveFriuts);
console.log(uniqueFruits);

//Map Methods
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers.get(1))//The Champion

console.log(bestBoxers);