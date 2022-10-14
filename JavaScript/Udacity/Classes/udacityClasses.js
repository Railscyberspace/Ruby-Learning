const Hero =  function(name, role){
        this.name = name
        this.role = role;

        this.introduce = function(lang){
            return `My mentor name is ${this.name} and is role is ${this.role} and program lang is ${lang}`

        }
    }

const mentor = new Hero("Rails", "software eng")

const roles = mentor.introduce("Javascript");
console.log(roles)

//EXcerise
const SandWich = function(bread, [], meat){
    this.bread = bread;
    this.sandwich = ["fish", "tatarus", "catfish"];
    this.meat = meat

}

const Sand = new SandWich("wheat",[], "vegetarian")
console.log(Sand)