import { Link } from "react-router-dom";
import '../StyleComponent/Register.scss';
import '../StyleComponent/Login.scss';


function Register(){
   return(
    <div>
                 
  <div className = "form-container" >
   <div className = "container-login register"> 
    <h4 className = "login-login text">Create An account</h4>
     <p className = "welcome-message text"> Welcome to the future of swift medical consultation.
             Create an account to get started. </p>
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
    
   <div className = "text-or">
    <h5 className ="or-move"><span className = "or">Or</span> </h5>
    </div>

    <div className = "shift-google">
          <Link className=" button-log-google btn btn-outline-success butting btn-secondary">login with Google</Link>
     </div>


<div className = "shift-facebook">
  <Link className=" button-log-google btn btn-outline-success butting btn-secondary">login with facebook</Link>
</div>
</div>

</div>
<div className = "link-account">
  <Link to ='/login' className="link-account">login</Link>
  </div>
</div>

   )
};

export default Register;