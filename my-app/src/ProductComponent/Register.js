import { Link } from "react-router-dom";
import '../StyleComponent/Register.scss';
import '../StyleComponent/Login.scss';
import { useState } from "react";






function Register(){
  const [firstname, lastname, email, State, Local_Govts, Phone, Gender, Password] = useState('')
  const [setFirstName, setLastName, setEmail, setState, setPhone, setGender, setPassword] = useState('')

   return(
   
    <div>
   <div className = "form-container" >
   <div className = "container-login register">
    <div className="heading-text">
    <h4 className = "login-login text">Create An account</h4>
     <span className = "welcome-message text"> Welcome to the future of power backups.
         Create an account to get started. </span>
    </div> 
    <div className="row">
      <div className="col form-group">
        <label className="label-text" htmlFor="firstname">firstname</label>
       <input id="firstname" type = "text"className = "form-control input-fill"  placeholder = "Firstname" value={firstname} onChange = {e => setFirstName(e.target.value)}/>
      </div>	
      <div className="col form-group">
        <label className ="label-text"  htmlFor="lastname">lastname</label>
       <input id = "lastname" type="text" className ="form-control input-fill" placeholder="Lastname" value={lastname} onChange ={e => setLastName(e.target.value)} />
      </div>	
    </div>
    <div className="row">
      <div className="col form-group">
        <label className ="label-text" htmlFor="email"> Email</label>
        <input id = "email" type="email" required ={true} className = "form-control input-fill"  placeholder = "Email"value={email} onChange ={e => setEmail(e.target.value)} />
      </div>
    </div>


    <div className='row'>
        <div className='col form-group'>
            <label className ="label-text"  htmlFor="state">State</label>
            <input id ="state" type='text' className = 'form-control input-fil'  placeholder = 'State' value={State} onChange = {e => setState(e.target.value)}/>
        </div>
       </div>
       <div className='row'>
           <div className='col form-group'>
                        <label htmlFor="Local_Govts" className ="label-text"> Local_Govts</label>
                    <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
                      <option className="select" >Select Your Local_Govts</option>
                      <option className="email" value="Female" >Yakurr</option>
                      <option className="email" value="Male">Yala</option>
                    </select>
             </div>
        </div>
    
    <div className="row">
      <div className="col form-group">
        <label className="label-text" htmlFor="Phone">Phone</label>
       <input id = "Phone" type= "number" className = "form-control input-fill"  placeholder = "Phone" value={Phone} onChange = {e => setPhone(e.target.value)}/>
      </div>
      <div className="col form-group">
        <label htmlFor="Gender" className ="label-text">Gender </label>
        <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
          <option id="Gender" className="select" value={Gender} onChange = {e =>setGender(e.target.value)}>Gender</option>
          <option className="email" value="Female" >Female</option>
          <option className="email" value="Male">Male</option>
        </select>
      </div>	
    </div>

    <div className="row">
    <div className="col form-group">
       <label htmlFor="Password" className ="label-text" >Password</label>
       < input id = "Password" type = "password" className = "form-control input-fill" placeholder = "Password" value={Password} onChange = {e => setPassword(e.target.value)} />
    </div>
    </div>

      <div className='row'>
                    <div className='col form-group'>
                  <label htmlFor="password" className ="label-text" >confirm password</label>
               <input id = "password" type='password' className = 'form-control input-fill'  placeholder = 'confirm password' value={Password} onChange = {e => setPassword(e.target.value)}/>
              </div>
      </div>
      <div className='row'>
          <div className='col form-group'>
          <button class="btn btn-outline-success butting btn-secondary" type="submit">Create An Account</button>
          </div>
      </div>

  </div>
     <div className = "link-account">
               <Link to ='/login' className="link-account links "><Link className="links">Already Have an account</Link> Login</Link>
    </div>

   </div>  
  
</div>

 )
};

export default Register;