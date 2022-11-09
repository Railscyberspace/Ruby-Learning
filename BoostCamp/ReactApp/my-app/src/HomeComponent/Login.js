import '../StyleComponent/Login.css';

import {useState} from 'react';
function Login(){

    const [form, setForm] = useState({
        firstname:"Rails",  lastName: "Abam", Email: "abam@gmail.com", Password: ''
    });
    return(
        <div className="container form">
                <h2>Login Here</h2>
                <div className='form-container'>
                <div className='mb-3'>
                    <label for  ="exampleFormControlInput1" className ="form-label">firstname  </label>
                    <input  type="text" className="form-control" id="exampleFormControlInput1" value = {form.firstname} onChange ={e =>{setForm({...form, firstname: e.target.value})}}/>
                </div>
                <div className='mb-3'>
                    <label for  ="exampleFormControlInput1" className ="form-label">lastName </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" value = {form.lastName} onChange ={e =>{setForm({...form, lastName: e.target.value})}}/>
                </div>
                <div className='mb-3'>  
                    <label for  ="exampleFormControlInput1" className ="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"  value = {form.Email}onChange ={e =>{setForm({...form,Email: e.target.value})}}/>
                </div>
                <div className='mb-3'>  
                    <label for  ="exampleFormControlInput1" className ="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1"  value = {form.Email}onChange ={e =>{setForm({...form,Password: e.target.value})}}/>
                </div>

             </div>
</div>
       
    );
};

export default Login;


