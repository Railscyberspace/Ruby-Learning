
function map (f, a){
    const result = []
    for(let i = 0; i < a.length; i++){
        result[i] = f(a[i])
    }
    return result;
}

//Function expressions are convenient when passing a function as an argument to another function. 
//The following example shows a map function that should receive a function as first argument
//and an array as second argument:

const f = function(x){
    return x * x * x * x
}

const d = f(2)

const numbers =  [2, 5, 10, 15, 20];


const save = map(f, numbers)
console.log(save)

