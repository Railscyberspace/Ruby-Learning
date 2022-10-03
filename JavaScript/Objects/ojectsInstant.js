

const myData = {
    name: "Rails",
    age: 29,
    Job: "engineer", 
    Hobbie: "swimming",
    canEat: true
}


const mySelf = Object.create(myData);
mySelf.learn = false;
mySelf.canSleep = true;

const submmitMyDate = () => {
    for(allData of Object.keys(mySelf)){
        console.log(`my data looks like these ${allData}: and i behave like these ${mySelf[allData]}`)
    }
}
submmitMyDate()


console.log("\n\n\n\n\n")
const submmitMyData = () => {
    for(Data in mySelf){
        console.log(`my data looks like these ${Data}: and i behave like these ${mySelf[Data]}`)
    }
}
submmitMyData()





// const animal = {
//     canJump: true   
//  };

// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;

// //  creating birdCan function and implementing for...of loop which include keys with value.

// function birdCan() {

//     for (items of Object.keys(bird)) {

//         console.log(items , ": " , bird[items]) ;    }}

// birdCan(); 
// console.log("\n\n\n\n\n")

// function animalCan() {

//     for (props in bird) {

//         console.log(props ,": ", bird[props]) ;     }}

// animalCan(); 