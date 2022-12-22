
import './App.scss';
import './StyleComponent/Home.scss';
import './StyleComponent/Logo.scss';
import './StyleComponent/Nav.scss';
import Login from './HomeComponent/Login';
import LogOut from './HomeComponent/LogOut';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './HomeComponent/Home';
import'bootstrap/dist/css/bootstrap.min.css';
import Inverters from './ProductComponent/Inverters';
import Batteries from './ProductComponent/Batteries';
import Register from './ProductComponent/Register';
import './StyleComponent/header.scss';
import './StyleComponent/Logo.scss';
import Search  from './ProductComponent/Search';
import SignUp from './ProductComponent/SignUp';



function App() {
  return (
  <div>
              <nav className=" navbar navbar-expand-lg sticky-top navbar-light bg-light" >
                    <div className="container-fluid">
                   <Link to = '/' className="navbar-brand text-center"></Link> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse nav-bar-destop navbar-collapse" id="navbarTogglerDemo01" >
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 inputfill" type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={Search} class="btn btn-outline-success butting btn-secondary" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to = "inverters" className="nav-link nav-link-color" >Inverters</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "batteries" className="nav-link nav-link-color">Batteries</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "search" className="nav-link nav-link-color">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="" className="nav-link nav-link-color">Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "" className="nav-link nav-link-color">Contact us</Link>
                            </li>
                            <li className="nav-item">
                            <Link to = "" className="nav-link nav-link-color">FAQ </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Link to = "login" className = "btn auth-btn register-btn" >Login</Link> 
                            <Link to = "register" className = "btn auth-btn small-btn login-btn" >Register</Link>
                            
                        </div>
                     </div>
                    </div>
            </nav>
      <Routes>
       <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
        <Route path='/inverters' element={<Inverters/>}></Route>
        <Route path='/batteries' element={<Batteries/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
       
      </Routes>
</div>


   
  );
}
export default App;



