
import './App.css';
import './StyleComponent/Logo.css';
import Contact from './HomeComponent/Contact';
import Home from './HomeComponent/Home';
import Login from './HomeComponent/Login';
import SignUp from './HomeComponent/SignUp';
import LogOut from './HomeComponent/LogOut';
import {Routes, Route, Link } from 'react-router-dom';
// import Calculator from './HomeComponent/Calculator';
import logo from './Images/logo.png';
import'bootstrap/dist/css/bootstrap.min.css';
import Inverters from './ProductComponent/Inverters';
import Batteries from './ProductComponent/Batteries';

function App() {
  return (
    <div className="App">
    <header>
     
  <nav className='nav-bar'>
    <div className='logo-header'>
      <img  className = 'logo' src =  {logo} alt ='logo'/> 
      </div>
      <div className='nav-link'>
        <Link to ="home" className ="nav-item">Home</Link>
        <Link to ="contact" className ="nav-item">About Us</Link>
        <Link to ="login" className ="nav-item">Login</Link>
        <Link to ="signup" className ="nav-item">SignUp</Link>
        <Link to ="logout" className ="nav-item">LogOut</Link>
        {/* <Link to = "calculator" className='nav-item'>Calculator</Link> */}
        <Link to ="inverters" className='nav-item'>Inverters</Link>
        <Link to = "batteries" className = 'nav-item'>Batteries</Link>
      </div>     
  </nav>
      <Routes>
        {/* <Route path='/calculator' element={<Calculator/>}></Route> */}
        <Route path ="/contact" element ={<Contact/>}></Route>
        <Route path ="/home" element ={<Home/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
        <Route path='/inverters' element={<Inverters/>}></Route>
        <Route path='/batteries' element={<Batteries/>}></Route>
      </Routes>

    </header>
    
    </div>
  );
}

export default App;
