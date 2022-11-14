import '../StyleComponent/Login.scss';

// import {useState} from 'react';
function Login(){  

    // const [form, setForm] = useState({
    //     firstname:"",  lastName: '', Email: '', Password: ''
    // });
    return(
        <div className="container form">
            <div className='container'>
            <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                </div>
           </div>
           <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Phone" aria-label="Last name"/>
                </div>
           </div>
           <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="State" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Local-Govt" aria-label="Last name"/>
                </div>
           </div>
           <div className="row g-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Password" aria-label="First name"/>
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Last name"/>
                </div>
           </div>
                <div className="col">
                    <button type="submit" className="form-control" >Submit</button>
                 </div>
            </div>
           
 
        </div>
       
    );
};

export default Login;


