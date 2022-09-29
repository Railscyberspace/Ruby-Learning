// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myButton = document.querySelector("button");


function setUserName(){
    const myName = prompt("please Enter your name: ");
    localStorage.setItem("name: ", myName);
    myHeading.textContent = `Hello I'm making progress ${myName}`
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storeName = localStorage.getItem("name");
    myHeading.textContent(`Hello is the not going well ${storeName}`)
}
myButton.onclick =() =>{
    setUserName();
}