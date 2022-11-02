import  carrots from './Assests/carrots.jpeg'
import DisplayMessage from "./MessageButton";
import ReactPlayer from "react-player";
import React from 'react';


function Home(){
    const vdmedia = "https://www.youtube.com/watch?v=MO3BnlMg5rk";
    return(
        <div>
            <DisplayMessage/>
             <img src =  {carrots} alt ='Carrota picture'/> 
             <div className='container'>
             <h2>Media player:</h2>
             <ReactPlayer url={vdmedia} playing ={false} volume ={0.6} /> 

             </div>
           
        </div>
    );
};



export  default Home;