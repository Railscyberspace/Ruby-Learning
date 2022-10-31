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




