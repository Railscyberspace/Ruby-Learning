import { useState} from "react";

const useStateHook = () =>{
    const [restaurantName ,setRestaurantName] = useState("lemon");

    function updateRestaurantName(){
        setRestaurantName('little Lemon')
    }

    return (
        <div>
            <h1>{restaurantName}</h1>
            <button onClick={updateRestaurantName}>Update restaurantName</button>
        </div>
    )
};
export default useStateHook;