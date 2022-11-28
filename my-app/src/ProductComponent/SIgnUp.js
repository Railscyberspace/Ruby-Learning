

import { useRef, useState } from "react";

const Form = () => { 
    const fileInput = useRef(null);
    const [value, setValue] = useState(""); 
   
    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 


    const handleSubmit = (e) =>{
        e.preventDefault();
        const files  = fileInput.current.files
    }
   
    return ( 
      <form onSubmit={handleSubmit}> 
        <label>firstname</label>
        <input ref={fileInput} type="text" 
        /> 
      </form> 
    ); 
   }; 

export default Form;