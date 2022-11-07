
import './App.css';
import Contact from './HomeComponent/Contact';
import Home from './HomeComponent/Home';
import Login from './HomeComponent/Login';
import SignUp from './HomeComponent/SignUp';
import LogOut from './HomeComponent/LogOut';
import {Routes, Route, Link } from 'react-router-dom';
import Calculator from './HomeComponent/Calculator';
import 

function App() {
  return (
    <div className="App">
    <header>
    <img src =  {carrots} alt ='Carrota picture'/> 
    <nav>
        <Link to ="home" className ="nav-item">Home</Link>
        <Link to ="contact" className ="nav-item">About Us</Link>
        <Link to ="login" className ="nav-item">Login</Link>
        <Link to ="signup" className ="nav-item">SignUp</Link>
        <Link to ="logout" className ="nav-item">LogOut</Link>
        <Link to = "calculator" className='nav-item'>Calculator</Link>
       
      </nav>
      <Routes>
        <Route path='/calculator' element={<Calculator/>}></Route>
        <Route path ="/contact" element ={<Contact/>}></Route>
        <Route path ="/home" element ={<Home/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
      </Routes>

    </header>
    
    </div>
  );
}

export default App;
