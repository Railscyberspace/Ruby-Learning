

let score = 8;
console.log("Mid-level skills:" > score);


let age = 10;
if(age >= 65){
    console.log("You get your income from your pension")
}else if(age < 65 && age >= 18){
    console.log( "Each month you get a salary")
}else if(age < 18){
    console.log("You get an allowance")
}else{
    console.log( "The value of the age variable is not numerical")
}


let day = "monday"
switch(day){
      case "monday":
      console.log("it monday")
      break;
      case "tuesday":
      console.log("it Tuesday")
      break;
      case "wedneday":
      default:
      console.log("not a day")
}



for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i)
    }
}
