
let myPlaces = [
    "Port Harcout",
    "Abuja",
    "Lagos",
    "Owerri"
]

function Places(place1, place2, place3, place4){
    return `I like to vist first ${place1}
     second place ${place2} and these city ${place3}
      and lastly these lovely city ${place4}`
}

 console.log(Places(myPlaces, [1], [2], [3]));