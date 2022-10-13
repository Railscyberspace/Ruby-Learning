const higherOrderFunction = function(){
    return function(){
        return 8
    }
}

const newfunction = higherOrderFunction
console.log(newfunction()())


//Call back function
const addNum = function (n ,callBackFun){
    return n + callBackFun();
}

    function returnFunction(){
        return 3;
    
}

console.log(addNum(2, returnFunction))


function each(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        console.log(array[i]);
      }
    }
  }
function isPositive(n){
    return n > 0
}  


const result = each
console.log(result([-2, 7, 11, -4, -10], isPositive))

//forEach

  function logNum (num) {
    console.log(num);
  }
  
  [1, 2, 3, 4].forEach(logNum);

  //Map
  const names = ['David', 'Richard', 'Veronika'];
  const nameLengths = names.map(function(name) {
  return name.length;
});


