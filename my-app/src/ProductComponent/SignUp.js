import { useState } from "react"

function SignUp(){
    const [name , setName] = useState('');
    const handleSubmit = () =>{
        console.log("submit sucessfully")
    };
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label>Name:</label>
                        <input type="text" placeholder = "Name" value={name} onChange ={e => setName(e.target.value)}/>
                        <button type="submit">submit</button>
                    </div>
                  
                </fieldset>
            </form>

        </div>
    )
}

export default SignUp;