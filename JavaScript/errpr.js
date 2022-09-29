function addTwoNums(a, b){
    try {
        console.log(a + b)
        if(typeof a != Number){
            throw new ReferenceError(
                console.log('the first argument is not a number')
            )
        }else if (typeof b != Number){
            throw new ReferenceError(
                console.log('the second argument is not a number')
            )
        }else{
            console.log(a + b)
        }
    } catch (error) {
        console.log('error', error)
    }
  
}
results = addTwoNums(5, "5")
console.log(results)
console.log( "It still works")



function letterFinder(word, match) {
    let condition1 = typeof(word == "String" && word.length >= 2)
    let condition2 = typeof(match == "String" && match.length >= 1)
    if(condition1 == true && condition2 == true){
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else{
        console.log( "Please pass correct arguments to the function.")
    }
   
}

console.log(letterFinder(3, 5))
console.log(letterFinder("test", "c"))