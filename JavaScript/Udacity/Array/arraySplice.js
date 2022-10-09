const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
result = rainbow.splice(2, 1, "yellow", "Green", "pupple")
console.log(rainbow)
console.log(rainbow.splice(2, 1))
//The first arugument is the index postion, second argument  
//is the element to delete. next is the adding elements



const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
//const team1 = ["George Weasley", "Fred Weasley", "Harry Potter"];
//const team1 = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"];
const hasEnoughPlayers = (team) => {
  
        if(team.length >= 7 ){
            return true
        }else{
            return false
        }
    }


console.log(hasEnoughPlayers(team1))


const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";


const crew= [captain, second, pilot, companion, mercenary, mechanic];
crew.push(doctor)
crew.push(sister)
crew.push(shepherd)
console.log(crew)