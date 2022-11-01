import {useState} from 'react';
function Login(){

    const [form, setForm] = useState({
        firstname:"Rails",  lastName: "Abam", Email: "abam@gmail.com"
    });
    return(
        <div>
        <h2>Login Here</h2>
            <label>firstname:
                <input value={form.firstname} onChange ={e =>{setForm({...form, firstname: e.target.value})}}/>
            </label><br/>

            <label>
                lastName:
                <input value={form.lastName} onChange ={e =>{setForm({...form, lastName: e.target.value})}}/>
            </label><br/>

            <label>
                Email:
                <input value ={form.Email}onChange ={e =>{setForm({...form,Email: e.target.value})}}/>
            </label>
        </div>
    )
}

export default Login;


