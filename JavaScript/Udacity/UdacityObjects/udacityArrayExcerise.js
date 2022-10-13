const donuts = [
    { type: "Jelly", 
    cost: 1.22 },
    { type: "Chocolate", 
    cost: 2.45 },
    { type: "Cider",
     cost: 1.59 },
    { type: "Boston Cream", 
    cost: 5.99 }
  ];

   donuts.forEach(function(arrayItSelf){
    
       console.log(` ${arrayItSelf.type} cost ${arrayItSelf.cost} each`)
       // return arrayItSelf.type + arrayItSelf.cost
       
  })

  donuts.forEach(function(donut){

       // donut represents a single element of donuts array
       // donut is an object, therefore you can access its properties using a dot notation
       console.log(donut.type+" donuts cost $"+donut.cost+" each");
   });
   