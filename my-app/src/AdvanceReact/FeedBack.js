import { useState } from "react"

function FeedBack(){
    const [score, setScore] = useState('')
    return(
        <div>
            <h2>Feedback Form:</h2>
            <div className="Field">
                <label>Score:{score}</label> 
                <input type = "range" min = "0" max = "10" value ={score} onChange = {e => setScore(e.target.value)}/>
                </div>
        </div>
    )
}

export default FeedBack;