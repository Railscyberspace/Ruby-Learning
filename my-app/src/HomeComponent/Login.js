import '../StyleComponent/Login.scss';
import '../StyleComponent/Register.scss';
import {Link} from 'react-router-dom';
 import {useState} from 'react';

function Login(){  
     const [ password, setPassword] = useState('');
     const [email, setEmail] = useState('')
     const handleSubmit = (e) =>{
        e.preventDefault()
        setEmail("")

     }
    return(
        <div>
            <form onSubmit={handleSubmit}  className = 'form-container'>              
                <div className='container-login register'>
                <div className="heading-text">
                    <h4 className = "login-login text">Create An account</h4>
                    <span className = "welcome-message text"> Welcome to the future of power backups.
                        Login to your account </span>
                </div> 
                      
                    <div className='row'>
                        <div className='col form-group'>
                            <label htmlFor='email'>Email</label>
                            <input id = 'email' type='email' required = {true} className = 'form-control input-fill' placeholder = 'email' value = {email} onChange = {e => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col form-group'>
                            <label htmlFor='password'>Password</label>
                            <input id = 'password' type='password' required ={true}  className = 'form-control input-fill'  placeholder = 'password' value={password} onChange = {e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row center'>
                        <div className='col form-group'>
                        <button disabled={!email && !password} className="button-log-google btn btn-outline-success butting btn-secondary" type="submit">Login</button>
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

            </form>
    </div>
       
    );
};

export default Login;


