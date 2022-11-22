import '../StyleComponent/Login.scss';
import '../StyleComponent/Register.scss';
import {Link} from 'react-router-dom';



// import {useState} from 'react';
function Login(){  

    // const [form, setForm] = useState({
    //     firstname:"",  lastName: '', Email: '', Password: ''
    // });
    return(
        <div>

            <div className = "form-container">
                <div className='container-login register'>
                <div className="heading-text">
                    <h4 className = "login-login text">Create An account</h4>
                    <span className = "welcome-message text"> Welcome to the future of power backups.
                        Login to your account </span>
                </div> 
                      
                    <div className='row'>
                        <div className='col form-group'>
                            <label>Email</label>
                            <input type='email' className = 'form-control input-fill' id ='control' placeholder = 'email'/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label>Password</label>
                            <input type='password' className = 'form-control input-fill' id ='control' placeholder = 'password'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col form-group'>
                        <button class="btn btn-outline-success butting btn-secondary push-btn" type="submit">Login</button>
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

                <div className = "link-account">
                          <Link to ='/register' className="link-account links "><Link className="links">Don't have an Account</Link> Login</Link>
                </div>


            </div>
    </div>
       
    );
};

export default Login;


