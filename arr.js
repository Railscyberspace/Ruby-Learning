function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
    }
      }
  }
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);





function letterFinder(word, match){
    for(let i = 0; i < word.length; i++){
        if(word[i] === match){
        console.log('Found the', match, 'at', i)
        }else{
            console.log('---No match found at', i)
        }
    }
}
result = letterFinder("test" , "t")
console.log(result);


function lettersFinder(word, match){
    for(let i = 0; i < word.length; i++){
        if(word[i] === match){
            console.log( i, 'found', "at", match)
        }else{
               console.log('---No match found at', i)
        }
    }
}
console.log(lettersFinder("test", "t"));

// Objects in javaScript


var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager);
// Accessing particular property
console.log(assistantManager.health);


// Another way to create Object using Odot notation

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2)

//Using brackets notation
var house1 = {};
house1["rooms"] = 4;
house1['color']= "pink";
house1["priceUSD"] = 12345;
house1["2022"] = 1901; //Additionally, I can add numbers (as the string data type) as property keys.
house1["number of doors"] = 4; //With the brackets notation, I can add space characters inside property names, like this
console.log(house1); // {rooms: 4, color: 'pink', priceUSD: 12345}


//ArrOfObject
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//Using function to build arrary 
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

simpleArr = arrayBuilder("apple", "pear", "magoes")
console.log(simpleArr);

