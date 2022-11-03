import {useState,useRef} from "react"; 

function Calculator(){
const inputRef = useRef(null); 
const resultRef = useRef(null); 
const [result, setResult] = useState(0); 

function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 

  function minus(e) { 
    // Add the code for the minus function 
};

function times(e) { 
  // Add the code for the plus function 
}; 

function divide(e) { 
  // Add the code for the divide function 
};

function resetInput(e) { 
  // Add the code for the resetInput function 
}; 

function resetResult(e) { 
    // Add the code for the resetResult function 
}; 

    return(
    <div>
            <h1>Simplest Working Calculator</h1>
        <form>
                <p ref={resultRef}>
                    {/* add the value of the current total */}
                </p>
                <input
                    pattern="[0-9]"
                    ref={inputRef}
                    type="number"
                    placeholder="Type a number" />
                <button onClick={plus}>add</button>
                <button onClick={times}>Times</button>
                <button onClick={divide}>Divide</button>
                <button onClick={minus}>Minus</button>
                <button onClick={resetInput}>ReSetInput</button>
                <button onClick={resetResult}>ReSetResult</button>
            </form>
    </div> 

       ); 
} 


export default Calculator;