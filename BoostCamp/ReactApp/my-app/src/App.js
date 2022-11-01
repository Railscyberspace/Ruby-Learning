
import './App.css';
import Contact from './HomeComponent/Contact';
import Home from './HomeComponent/Home';
import Login from './HomeComponent/Login';
import SignUp from './HomeComponent/SignUp';
import LogOut from './HomeComponent/LogOut';
import Message from './HomeComponent/Message';
import {Routes, Route, Link } from 'react-router-dom'
import DisplayMessage from './HomeComponent/MessageButton';

function App() {
  return (
    <div className="App">

      <nav>
      <Link to ="home" className ="nav-item">Home</Link>
        <Link to ="contact" className ="nav-item">Contact Us</Link>
        <Link to ="login" className ="nav-item">Login</Link>
        <Link to ="signup" className ="nav-item">SignUp</Link>
        <Link to ="logout" className ="nav-item">LogOut</Link>
       
      </nav>
      <Routes>
        <Route path ="/contact" element ={<Contact/>}></Route>
        <Route path ="/home" element ={<Home/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signUp" element ={<SignUp/>}></Route>
        <Route path ="/logout" element ={<LogOut/>}></Route>
      </Routes>
      <DisplayMessage/>
{/* 
      <Contact/>
      <Home/>
      <Login/>
      <SignUp/>
      <LogOut/> */}
      {/* <WeekDay/>
      <WeekEnd/> */}
      {/* <Message/> */}
    </div>
  );
}

export default App;
