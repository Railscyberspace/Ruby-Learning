
import './App.css';
import Heading from './Component/Heading';
import Promo from './Component/Promo';
import Nav from './Component/Nav'
import Maths from './Component/Maths';
import FLoor from './Component/Floor';
import AddNum from './Component/AddNum';
import Card from './Component/Card';
import Button from './Component/Button';
import ButtonTest from './Component/Testing/ButtonTest';
import GuessGame from './Component/Testing/GuessGame';
import Time from './Component/Time';
import Typing from './Component/Testing/Typing';
import Form from './Component/Testing/Form';
import Main  from './ParentChildComponent/Main';
import Fruit from './ParentChildComponent/Fruit';
import FruitCounter from './ParentChildComponent/FriutCounter';
import React from 'react';
import HomeContact from './ParentChildComponent/HomeContact';
import HomeAboutUs from './ParentChildComponent/HomeAboutUs';
import {Routes, Route, Link} from 'react-router-dom';



function App() {
  //useState  
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);
  const date = new Date()
  return (
    <div>
      <nav>
        <Link to = "/homecontact" className='nav-item'>Home</Link>
        <Link to ="/homeaboutus" className='nav-item'>About us</Link>
      </nav>
      <Routes>
        <Route path ='/contact' element ={<HomeContact/>}></Route>
        <Route path ='/contactaboutus' element ={<HomeAboutUs/>}></Route>
      </Routes>
      
      
       <h1>Where should the state go?</h1>
      <Fruit fruits = {fruits} />
      <FruitCounter  fruits = {fruits} />

      <Main msg = "I passed through the Header and the Wrapper and I reached the Button component" />
      <Form/>
      <Typing/>
    <Time message ={date.toLocaleTimeString()}/>
    <Heading name = "Rails" />
    <Nav/>
    <Promo/>
    <Maths/>
    <FLoor/>
    <AddNum />
    <div className = "App">
    <h1>Task: Add three Card elements</h1>
    <Card   h2 = "First card's h3"  h3 ="First card's h3"/>
    <Card   h2 = "Second card's h2" h3 = "second card's h3"/>
    <Card   h2 = "Third card's h3" h3 = "Third card's h3"/>
    </div>
    
    <div>
      <h1>Welcome to these Button</h1>
    <Button welcome = "I'm a button"/>
    </div>
    <div>
      <ButtonTest/>
      <GuessGame/>
    </div>
    </div>

  );
}

export default App;
