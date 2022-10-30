
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

function App() {
  return (
    <div>
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
