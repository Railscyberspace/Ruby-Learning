
// Classes
class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

const  reactangle = new Rectangle(10, 15)
reactangle.height;
console.log(reactangle.width);

//Classes Expressions
//I think the different is the sytnaxs
const Reactions = class{
    constructor(feeling, emotions){
        this.feeling = "love";
        this.emotions = "feelings";//These still works as this.emotions = emotions
    }
}
const HowYouFell = new Reactions()
console.log(HowYouFell.emotions)


//Class Profiles of People that  can inherit Threads

const ProileOfRails = class{
    constructor(age , color , hoobbies , plan){
     this.age = 29;
     this.color = "dark";
     this.hoobbies = "swimming";
     this.plan = true;
    }
}


const  myProiles = new ProileOfRails();
console.log(myProiles.age);
console.log(myProiles.color);
console.log(myProiles.hoobbies);
console.log(myProiles.plan);


class kingleyProfiles extends ProileOfRails {
    constructor(age, color, plans, job, hoobbies, plan){
    super(hoobbies, plan)
    this.age = age
    this.color = color
    this.plans = plans
    this.job = job

   } 
}


const friendsProfiles = new kingleyProfiles(31, "dark", false, "engineer", 29, "swimming")
console.log(friendsProfiles.age)
console.log(friendsProfiles.color)
console.log(friendsProfiles.plans)
console.log(friendsProfiles.job)
console.log(friendsProfiles.hoobbies)//These are the properties of profileOfRails
console.log(friendsProfiles.plan);