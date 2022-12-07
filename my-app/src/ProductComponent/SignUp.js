import { useState } from "react"

function SignUp(){
    const [name , setName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault()
        setName("")
        console.log("submit sucessfully")
    };
    
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Name:</label>
                        <input id = "name" type="text" placeholder = "Name" value={name} onChange ={e => setName(e.target.value)}/>
                        <button disabled={!name} type="submit">submit</button>
                    </div>
                </fieldset>
            </form>

        </div>
    )
}

export default SignUp;