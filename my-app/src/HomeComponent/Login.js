import '../StyleComponent/Login.scss';

import {useState} from 'react';
function Login(){  

    const [form, setForm] = useState({
        firstname:"",  lastName: '', Email: '', Password: ''
    });
    return(
        <div className="container form">
                <div className='form-container'>
                <h2>Login Here</h2>
                <div className='mb-3'>
                    <label for  ="exampleFormControlInput1" className ="form-label">firstname  </label>
                    <input  type="text" className="form-control" id="exampleFormControlInput1" placeholder='Firstname' value = {form.firstname} onChange ={e =>{setForm({...form, firstname: e.target.value})}}/>
                </div>
                <div className  = "col form-group">
                    <label for  ="exampleFormControlInput1" className ="form-label">lastName </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder='Lastname' value = {form.lastName} onChange ={e =>{setForm({...form, lastName: e.target.value})}}/>
                </div>
                <div className='mb-3 col form-group"'>  
                    <label for  ="exampleFormControlInput1" className ="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"   placeholder='Email' value = {form.label}onChange ={e =>{setForm({...form,Email: e.target.value})}}/>
                </div>
                <div className='mb-3 col form-group '>  
                    <label for  ="exampleFormControlInput1" className ="form-label">Password</label>
                    <input type="password" className="form-control input-fill" id="exampleFormControlInput1"  placeholder='Password' onChange ={e =>{setForm({...form,Password: e.target})}}/>
                </div>

             </div>
</div>
       
    );
};

export default Login;


