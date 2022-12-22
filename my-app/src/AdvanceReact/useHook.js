
import { useState} from "react";

function useHook(){
    const [restaurantName ,setRestaurantName] = useState("lemon");

    function updateRestaurantName(){
        setRestaurantName('little Lemon')
     }
    return (
        <div>
            <h1>{restaurantName}</h1>
            <button  className="btn btn" onClick={updateRestaurantName}>Update restaurantName</button>
        </div>
    )
};
//Correct way to update usestate 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 
