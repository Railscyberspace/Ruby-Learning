console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)

let count = 2022;
while(count > 2018){
    count = count - 1;
}
console.log('Counting completed!')


for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}


for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


for(let i = 1; i <=10; i++){
    if(i === 1){
        console.log("Gold medal")
    }else if(i === 2){
        console.log("Silver medal")
    }else if(i === 3){
        console.log("bronze medal")
    }else{
        console.log(i)
    }
}