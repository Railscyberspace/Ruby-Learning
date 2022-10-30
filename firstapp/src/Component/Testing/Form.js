import {useState} from 'react';

function Form(){
    
    const [form, setForm] = useState({
        firstname: "Rails", lastName: "Abam", Email: "abamsunday@gmail.com"
    });
    const add = [ form.firstname + form.lastName, form.Email]
    return(
        <div>
            <label>firstname:
                <input value={form.firstname} onChange ={e =>{setForm({...form, firstname: e.target.value})}}/>
            </label><br/>

            <label>
                lastName:
                <input value={form.lastName} onChange = {e =>{setForm({...form, lastName: e.target.value})}}/>
            </label><br/>

            <label>
                Email:
                <input value ={form.Email} onChange = {e => {setForm({...form,Email: e.target.value})}}/>
            </label><br/>
            <button value={form.submit} onClick = {e => {setForm({...form, add:alert(add.toLocaleString())})}}>submit</button>
            <p>{form.firstname}</p>
            <p>{form.lastName}</p>
            <p>{form.Email}</p>
            <p>{}form.add</p>
        </div>
        
 
    );
};

export default Form;