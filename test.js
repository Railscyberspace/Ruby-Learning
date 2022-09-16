
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


let check = 60;
while(check  >= 0){
    if(check === 50){
        console.log(check,"Orbiter transfers from ground to internal power (T-50 seconds)")
    }else if(check === 31){
    console.log("T-31")

  }else if (check === 16){
    console.log(check, "Activate launch pad sound suppression system (T-16 seconds)")
  } else if (check === 10){
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)")
  } else if (check === 6){
    console.log(check, "Main engine start (T-6 seconds)")
  } else if (check === 0){
    console.log(check, "Solid rocket booster ignition and liftoff! (T-0 seconds)")
  }else {
    console.log("T-",check + "seconds")
  }
  check -= 1;
}

