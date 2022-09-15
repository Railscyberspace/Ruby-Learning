
let x = 1;
while (x <= 20) {
   if( x % 3 === 0){
  console.log(x, "julia")
} else if (x % 5 === 0){
  console.log(x, "james")
} else if (x % 2 === 0 && x % 5 === 0){
  console.log(x,"julianjames")
} else if (x !== 3 && x !== 5){
  console.log(x)
}else{
  console.log("nothing")
}
x +=1
}