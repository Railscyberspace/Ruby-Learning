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
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
};

function times(e) { 
  // Add the code for the plus function 
  e.preventDefault();
  setResult((result) => result * Number(inputRef.current.value))
}; 

function divide(e) { 
  // Add the code for the divide function 
  e.preventDefault();
  setResult((result) => result / Number(inputRef.current.value))
};

function resetInput(e) { 
  // Add the code for the resetInput function 
  e.preventDefault();
  inputRef.current.value =0;

}; 

function resetResult(e) { 
    // Add the code for the resetResult function 
    e.preventDefault();
    setResult((preVal) => preVal * 0)
}; 

    return(
    <div>
            <h1>Simplest Working Calculator</h1>
        <form>
                <p ref={resultRef}>{result}</p>
                <div className="card">
                <input pattern="[0-9]"ref={inputRef} type="number" placeholder="Type a number" />
              {/* </div> */}
                <div className="card-btn">
                <button className = "btn" onClick={plus}>add</button>
                <button className="btn" onClick={times}>Times</button>
                <button  className="btn" onClick={divide}>Divide</button>
                <button className="btn" onClick={minus}>Minus</button>
                <button className="btn" onClick={resetInput}>ReSetInput</button>
                <button className="btn" onClick={resetResult}>ReSetResult</button>
                </div>
                </div>
           
            </form>
        
    </div> 

       ); 
} 


export default Calculator;