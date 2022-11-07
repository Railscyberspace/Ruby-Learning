import {useState} from 'react';
function Login(){

    const [form, setForm] = useState({
        firstname:"Rails",  lastName: "Abam", Email: "abam@gmail.com"
    });
    return(
        <div class="container">
        <h2>Login Here</h2>
            <label className='text'>firstname:
                <input  className='input-fill' value={form.firstname} onChange ={e =>{setForm({...form, firstname: e.target.value})}}/>
            </label><br/>

            <label className='text'>
                lastName:
                <input className='input-fill' value={form.lastName} onChange ={e =>{setForm({...form, lastName: e.target.value})}}/>
            </label><br/>

            <label className='text'>
                Email:
                <input className='input-fill' value ={form.Email}onChange ={e =>{setForm({...form,Email: e.target.value})}}/>
            </label>

        </div>
       
    );
};

export default Login;


