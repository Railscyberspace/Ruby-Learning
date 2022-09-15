
count = 1
while(count <= 10) {
    console.log(count, "missisissppi")
    count += 1
}


console.log("\n\n")
let num = 0
while(num <= 20){
    if(num % 5 === 0){
        console.log(num,  "is dividable by 3 so is " + "buzz")
    } else if (num % 3 === 0){
        console.log(num, "Is dividable by 5 so is " + "Fuzz")
    } else if (num % 3 === 0 &&  num  % 5 === 0) {
        // const pick = (value) => {
        //     return num
        // }
        // save = pick(num)
        // console.log(save)
        console.log(num,"is  dividable by 3 and 5 so is " + "fuzzBuzz")
    } else if (num !== 3 && num !== 5) {
        console.log(num)
    }
    num += 1
}


