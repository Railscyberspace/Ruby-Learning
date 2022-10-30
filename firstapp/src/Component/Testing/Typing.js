import {useState} from  'react';

function Typing(){
  const [inputText, setText] = useState('Hello'); 
  function handleChange(e) { 
    setText(e.target.value); 
  };
    return(
     <div>
        <input value = {inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick = {() => setText()}> 
        Reset 
      </button> 
     </div>
    );
};

export default Typing;


