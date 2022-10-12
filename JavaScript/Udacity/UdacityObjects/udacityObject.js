const umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     },

     close:function(){
        if(umbrella.isOpen === true){
            umbrella.isOpen = false;
            return "Julia opens the umbrella!"
        }else{
            return "Julia closes the umbrella!"
        }
     }
  };

const result1 = umbrella.isOpen; // returns false
const result2 = umbrella.open(); // returns 'Julia opens the umbrella!'
const result3 = umbrella.isOpen;
const result4 = umbrella.close()
console.log(result4)


const sister = {
    name: "Sarah",
    age: 23,
    parents: ["Alice", "Andy"],
    siblings: ["Julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function() { 
        return "Sarah paints!";
     }
  };
  
  sister.paintPicture();

  const breakFast = {
  
    name: 'The Lumberjack',
    price: '$9.95',
    ingredients: [ 'eggs', 'sausage', 'toast', 'hashbrowns', 'pancakes' ]
  }

  console.log(breakFast)



  var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },

    printAccountSummary:function(){
     return `Welcome!
     Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`
     
    }

  };

  const result5 = savingsAccount
  const result6 = savingsAccount.printAccountSummary()
  console.log(result6)