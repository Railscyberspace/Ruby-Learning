function ButtonTest(){
    return(

    <div className = "card">
        <button onClick={function() {console.log('first example')}}>
        An inline anonymous ES5 function event handler
    </button>

    <button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
    </button>
    </div>

    
    
    
    );
};


export default ButtonTest;




// function App() {
//         const fourthExample = () => console.log('fourth example');
    
//         return (
//             <div className="fourthExample">
//                 <button onClick={fourthExample}>
//                     using a separate function expression
//                 </button>
//             </div>
//       );
//     };
//     export default App;