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


// function letters(abc){
//     for(i = 0; i < abc.length; i++)
//     //in the console i is the arrary index starting from zero
//     console.log(1,abc[i]);
    
// }

// console.log(letters(["a","bcdefghij"]))




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
            console.log('Found the', match, 'at', i)
        }else{
               console.log('---No match found at', i)
        }
    }
}
console.log(lettersFinder("test", "a"));

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