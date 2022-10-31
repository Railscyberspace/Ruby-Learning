
import './App.css';
import Contact from './HomeComponent/Contact'
import {Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <nav>
        <Link to ="contact" className ="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path ="/contact" element ={<Contact/>}></Route>
      </Routes>

      <Contact/>
    </div>
  );
}

export default App;
