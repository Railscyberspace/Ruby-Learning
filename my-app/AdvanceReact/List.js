

const data = [
    {
    id: 1,
    title: "railprofile",
    discription: "github",
    image:"https://github.com/RailsAbam",
    role: "junior dev",

     },
      {
        id:2, 
        title:"coraprofile",
        discription: "github",
        image:"https://github.com/yocontra/react-responsive/commits?author=yocontra",
        role:"senior dev",

    },
    {
    id:3, 
        title:"pekerprofile",
        discription: "github",
        image:"https://github.com/pekeler",
        role:"peker dev",


    }
]

const topSearch =  data.map(informs => {
    return {
        contents:`${informs.title} - ${informs.discription} - ${informs.image}`,
        role: informs.role,
    }
})

console.log(topSearch)