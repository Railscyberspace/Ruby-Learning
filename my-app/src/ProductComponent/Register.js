import { Link } from "react-router-dom";
import '../StyleComponent/Register.scss';
import '../StyleComponent/Login.scss';
import { useState } from "react";
import { validateEmail } from "../utils"; 

function Register(){
const PasswordErrorMessage = () => {
  if(Password <= 8)
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};
  const [firstname,setFirstName ] = useState('') 
  const [lastname,setLastName] = useState('') 
  const [email,  setEmail] = useState('') 
  const [ State,  setState] = useState('')
  const [ Phone, setPhone] =  useState('')
  const [ Local_Govts, setLocal_Govts] = useState('Gender') 
  const [ Gender,  setGender] = useState('') 
  const [Password,setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword,setConfirmPassword] = useState({value: "", isTouched: false});

const getIsFormValid =() =>{
  return(
    firstname && validateEmail(email) && Password.value.length >= 8 && Gender !== "Gender"
  )};

  const clearForm =() =>{
    setFirstName('')
    setLastName('')
    setEmail('')
    setState('');
    setPhone('');
    setConfirmPassword('');
    setLocal_Govts('');
    setPassword({
      value: "",
      isTouched: false
    });
    setGender("Gender");
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert("account created sucessfully");
    clearForm();
  }  
   return(
   
    <div>
   <form onSubmit={handleSubmit} className = "form-container" >
   <div className = "container-login register">
    <div className="heading-text">
    <h4 className = "login-login text">Create An account</h4>
     <span className = "welcome-message text"> Welcome to the future of power backups.
         Create an account to get started. </span>
    </div> 
    <div className="row">
      <div className="col form-group">
        <label className="label-text" htmlFor="firstname">firstname <sup className="sup">*</sup> </label>
       <input id="firstname" type = "text" min={4} max ={16} required = {true} className = "form-control input-fill"  placeholder = "Firstname" value={firstname} onChange = {e => setFirstName(e.target.value)}/>
      </div>	
      <div className="col form-group">
        <label className ="label-text"  htmlFor="lastname">lastname <sup className="sup">*</sup> </label>
       <input id = "lastname" type="text" min = {4} max ={16} required ={true} className ="form-control input-fill" placeholder="Lastname" value={lastname} onChange ={e => setLastName(e.target.value)} />
      </div>	
    </div>
    <div className="row">
      <div className="col form-group">
        <label className ="label-text" htmlFor="email"> Email <sup className="sup">*</sup> </label>
        <input id = "email" type="email" required ={true} className = "form-control input-fill"  placeholder = "Email"value={email} onChange ={e => setEmail(e.target.value)} />
      </div>
    </div>


    <div className='row'>
        <div className='col form-group'>
            <label className ="label-text"  htmlFor="state">State</label>
            <input id ="state" type='text' required = {true} className = 'form-control input-fil'  placeholder = 'State' value={State} onChange = {e => setState(e.target.value)}/>
        </div>
       </div>
       <div className='row'>
           <div className='col form-group'>
                      <label htmlFor="Local_Govts" className ="label-text"> Local_Govts</label>
                      <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
                      <option className="select" value={Local_Govts} onChange = {e => setLocal_Govts(e.target.value)} >Select Your Local_Govts</option>
                      <option className="email set" required ={true}   value="Female" >Yakurr</option>
                      <option className="email set" value="Male">Yala</option>
                    </select>
             </div>
        </div>
    
    <div className="row">
      <div className="col form-group">
        <label className="label-text" htmlFor="Phone">Phone <sup className="sup">*</sup> </label>
       <input id = "Phone" type= "number" minLength={11} maxLength={11} className = "form-control input-fill"  placeholder = "Phone" value={Phone} onChange = {e => setPhone(e.target.value)}/>
      </div>
      <div className="col form-group">
        <label htmlFor="Gender" className ="label-text">Gender <sup className="sup">*</sup>  </label>
        <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
          <option id="Gender" className="select" value={Gender} onChange = {e =>setGender(e.target.value)}>Gender</option>
          <option className="email set"  value="Female" >Female</option>
          <option className="email set" value="Male">Male</option>
        </select>
      </div>	
    </div>

    <div className="row">
    <div className="col form-group">
       <label htmlFor="Password" className ="label-text" >Password <sup className="sup">*</sup> </label>
       < input id = "Password" required ={true} min ="4" max = "10" type = "password" {...PasswordErrorMessage()} className = "form-control input-fill" placeholder = "Password" 
       value={Password.value} onChange = {e => setPassword({...Password,value: e.target.value})} onBlur ={() =>{setPassword({...Password, isTouched:true})}} />
        {Password.isTouched && Password.value.length < 8 ? ( <PasswordErrorMessage /> ) : null} 
    </div>
    </div>

      <div className='row'>
                    <div className='col form-group'>
                  <label htmlFor="password" className ="label-text" >confirm password <sup className="sup">*</sup></label>
               <input id = "password" required ={true} min = "4" max = "10" type='password' className = 'form-control input-fill'  placeholder = 'confirm password' value={confirmPassword.value} onChange = {e => setConfirmPassword({...confirmPassword, value: e.target.value})} 
               onBlur ={() =>{setPassword({...Password, isTouched:true})}} />
               {Password.isTouched && Password.value.length < 8 ? ( <PasswordErrorMessage /> ) : null} 
              </div>
      </div>
      <div className='row center'>
          <div className='col form-group'>
          <button  disabled ={!getIsFormValid()} class="button-log-google btn btn-outline-success butting btn-secondary" type="submit">Create An Account</button>
          </div>
      </div>


  </div>
     <div className = "link-account">
               <Link to ='/login' className="link-account links "><Link className="links">Already Have an account</Link> Login</Link>
    </div>

   </form>  
  
</div>

 )
};

export default Register;



