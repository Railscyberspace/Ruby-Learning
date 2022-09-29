// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep(){
         this.energy += 10;
          console.log("Energy is increase", this.energy)
        
    }
    doSomethingFun(){
       this.energy  -= 10;
    console.log("Energy is decreasing, currently at: ", this.energy)
    }
}


class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy )
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork(){
         this.xp += 10;
          console.log("experince increased by: ", this.xp);

       }
    }

  function intern() {

      // as documentation said

    var intern = new Worker("Bob", 21, 110, 0, 10);
    return intern;
  }
  
  // Task 4: Code a manager object, methods
  function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);          
    manager.doSomethingFun();
    return  manager
}


console.log(intern());
console.log(manager());

