
import './App.scss';
import './StyleComponent/Home.scss';
import './StyleComponent/Logo.scss';
import './StyleComponent/Nav.scss';
import Contact from './HomeComponent/Contact';
import Login from './HomeComponent/Login';
import SignUp from './HomeComponent/SignUp';
import LogOut from './HomeComponent/LogOut';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './HomeComponent/Home';
import logo from './Images/logo.png';
import'bootstrap/dist/css/bootstrap.min.css';
import Inverters from './ProductComponent/Inverters';
import Batteries from './ProductComponent/Batteries';
import Register from './ProductComponent/Register';
//`import  th  from './Images/th.jpeg';
import './StyleComponent/header.scss';
import './StyleComponent/Logo.scss'


function App() {
  return (
  <div>

              <nav className=" navbar navbar-expand-lg sticky-top navbar-light bg-light">
                    <div className="container-fluid">
                   <Link to = '/' className="navbar-brand text-center"></Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse nav-bar-destop navbar-collapse" id="navbarTogglerDemo01" >
                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                            <Link to = "inverters" className="nav-link nav-link-color" >Find doctor</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "batteries" className="nav-link nav-link-color">TIM</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "" className="nav-link nav-link-color">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="" className="nav-link nav-link-color">Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "" className="nav-link nav-link-color">Contact us</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "" className="nav-link nav-link-color">FAQ</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to = "login" className = "btn auth-btn register-btn" >Login</Link> 
                            <Link to = "register" className = "btn auth-btn small-btn login-btn" >Register</Link>
                        </div>
                     </div>

                    <div className = "nav-item mobile-path">
                        <div className = "search-container">
                            <img src =  "" alt = "search" className ="search-icon mobile-icon" />
                        </div>
                            <Link  className="mobile-login-btn">
                            <img src = "" className =  "auth-user-icon"/>
                            <h3 className="signout">SignOut</h3>
                            </Link>
                            <Link to = "/" className="mobile-login-btn">
                            <img src = "" className = "auth-user-icon "/>
                            <h3 className="mobile-icon">Login</h3>
                            </Link>
                            <Link to = "" className="mobile-register-btn">
                            <img src = "header_svgs/purple-user.svg" alt = "user" className = "auth-user-icon"/>
                            <h3 className="mobile-icon">Register</h3>
                            </Link>
                        </div>
                    </div>
            </nav>
      <Routes>
       <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/contact" element ={<Contact/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
        <Route path='/inverters' element={<Inverters/>}></Route>
        <Route path='/batteries' element={<Batteries/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;
