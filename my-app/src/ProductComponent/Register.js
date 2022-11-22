import { Link } from "react-router-dom";
import '../StyleComponent/Register.scss';
import '../StyleComponent/Login.scss';


function Register(){
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
        <label>firstname</label>
       <input type = "text"className = "form-control input-fill"  placeholder = "Firstname" />
      </div>	
      <div className="col form-group">
        <label>lastname</label>
       <input type="text" className ="form-control input-fill" placeholder="Lastname" />
      </div>	
    </div>
    <div className="row">
      <div className="col form-group">
        <label> Email</label>
        <input type="text" className = "form-control input-fill"  placeholder = "Email" />
      </div>
    </div>


    <div className='row'>
        <div className='col form-group'>
            <label>State</label>
            <input type='email' className = 'form-control input-fill' id ='control' placeholder = 'email'/>
        </div>
       </div>
       <div className='row'>
           <div className='col form-group'>
                        <label>Local-Govts</label>
                    <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
                      <option className="select" >Local-Govts Area</option>
                      <option className="email" value="Female" >Yakurr</option>
                      <option className="email" value="Male">Yala</option>
                    </select>
             </div>
        </div>
    
    <div className="row">
      <div className="col form-group">
        <label>Phone</label>
       <input type= "number" className = "form-control input-fill"  placeholder = "Phone"/>
      </div>
      <div className="col form-group">
        <label>Gender </label>
        <select className="form-select form-select form-control input-fill" aria-label=".form-select-lg example" id = "select-gender">
          <option className="select" >Gender</option>
          <option className="email" value="Female" >Female</option>
          <option className="email" value="Male">Male</option>
        </select>
      </div>	
    </div>

    <div className="row">
    <div className="col form-group">
       <label>Password</label>
       < input type = "password" className = "form-control input-fill" placeholder = "Password"/>
    </div>
    </div>

      <div className='row'>
                    <div className='col form-group'>
                  <label>confirm password</label>
               <input type='password' className = 'form-control input-fill' id ='control' placeholder = 'confirm password'/>
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