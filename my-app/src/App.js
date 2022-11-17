
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
//`import  th  from './Images/th.jpeg';


function App() {
  return (
    <div className="App">
  <header>
  <nav className='nav-bar container-fluid'>
    <div className='logo-header'>
      <img  className = 'logo' src =  {logo} alt ='logo'/>
      </div>
      <form class="d-flex push container" role="search">
         {/* <img  className='icon' src={th} height={50} width={50} alt ="search icon"/> */}
          <input className="form-control me-2 fill searchbox" id = "search" type="search" placeholder="Search for your items here......" aria-label="Search"/>
          <button  className='searchbutton'  value="search" type="submit">Search</button>
        </form>
      <div className='nav-link navbar navbar-expand-lg sticky-top container-fluid'>
        <Link to ="login" className ="nav-item">Login</Link>
        <Link to ="signup" className ="nav-item">SignUp</Link>
        <Link to ="logout" className ="nav-item">LogOut</Link>
        <Link to ="inverters" className='nav-item'>Inverters</Link>
        <Link to = "batteries" className = 'nav-item'>Batteries</Link>
      </div>     
  </nav>
  </header>
      <Routes>
       <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/contact" element ={<Contact/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
        <Route path='/inverters' element={<Inverters/>}></Route>
        <Route path='/batteries' element={<Batteries/>}></Route>
      </Routes>
      
    </div>
  );
}
export default App;
