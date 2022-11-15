import '../StyleComponent/Login.scss';

// import {useState} from 'react';
function Login(){  

    // const [form, setForm] = useState({
    //     firstname:"",  lastName: '', Email: '', Password: ''
    // });
    return(
        <div>
          <div className='Register-container'>
             <div className='container login'>
                    <h2 className='head-text'>Create An Aaccount</h2>
                    <p className='welcome-text'>Enter your details to Register</p>
                <div className="row">
                    <div className="col">
                        <label>firstname</label>
                        <input type="text" className="form-control input-fill" id = 'place'  placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col">
                    <label>lastname</label>
                        <input type="text" className="form-control input-fill" id = 'place' placeholder="Last name" aria-label="Last name"/>
                    </div>
            </div>
           <div className="row ">
                <div className="col">
                <label>email</label>
                    <input type="text" className="form-control input-fill "id = 'place' placeholder="Email" aria-label="First name"/>
                </div>
                <div className="col">
                    <label>phone</label>
                    <input type="text" className="form-control input-fill"  id = 'place'  placeholder="Phone" aria-label="Last name"/>
                </div>
           </div>
           <div className="row">
                <div className="col">
                <label>State</label>
                    <input type="text" className="form-control input-fill"  id = 'place' placeholder="State" aria-label="First name"/>
                </div>
                <div className="col">
                <label>local-Govt</label>
                    <input type="text" className="form-control input-fill" id = 'place' placeholder="Local-Govt" aria-label="Last name"/>
                </div>
           </div>
           <div className="row ">
                <div className="col">
                <label>Password</label>
                    <input type="text" className="form-control input-fill" id = 'place'  placeholder="Password" aria-label="First name"/>
                </div>
                <div className="col">
                <label>confirm-password</label>
                    <input type="text" className="form-control input-fill" id = 'place'  placeholder="Confirm Password" aria-label="Last name"/>
                </div>
           </div>
                <div className="col submit">
                    <button type="submit" className="btn btn-secondary btn-lg" >Submit</button>
    </div>
            </div> 
        </div>
           
 
    </div>
       
    );
};

export default Login;


