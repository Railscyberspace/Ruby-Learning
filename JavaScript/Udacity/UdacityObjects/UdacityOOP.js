const bicycle = {
    color: 'blue',
    type: 'mountain bike',
    wheels: {
      diameter: 18,
      width: 8
    }
  };

const val = bicycle.wheels.diameter;//Dot Notation
const val1 = bicycle["wheels"]["diameter"];//Bracket Notation
console.log(val, val1)



const cat = {
    age: 2,
    name: 'Bailey',
    meow: function () {
      console.log('Meow!');
    },
    greet: function (name) {
      console.log(`Hello ${this.name}`);
    }
  };

cat["age"] = 12//Changing the valueo of age here
console.log(cat.age)

console.log(cat.greet())

//Creating  A new object and adding values to it
const  printer = {}
printer["on"] = true
printer.remain = "red and pink"

printer.Really =  function(){
  console.log("Yae progress")
}

console.log(printer)

const iceCreamOriginal = {
    Andrew: 3,
    Richard: 15
  };

const iceCreamCopy = iceCreamOriginal;

iceCreamCopy.Richard;
// 15
iceCreamCopy.Richard = 99;

iceCreamCopy.Richard;
// 99

iceCreamOriginal.Richard;
// 99