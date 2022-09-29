
// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    console.log(message, style);
    
}



// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log("hello");
    }
  
}


console.log(consoleStyler('#1d5c63'))

console.log(consoleStyler('#ede6db'))

console.log(consoleStyler('Congrats!'))


console.log(celebrateStyler('birthday'))

// Task 3: Run both the consoleStyler and the celebrateStyler functions


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    consoleStyler()
    celebrateStyler()
}
// Call styleAndCelebrate

console.log(styleAndCelebrate('ef7c8e'))
console.log(styleAndCelebrate('fae8e0'))
console.log(styleAndCelebrate('You made it!'))
console.log(styleAndCelebrate('champions'))
