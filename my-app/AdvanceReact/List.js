

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

function SendDate(){

const topSearch =  data.map(informs => {
    const listItems = data.map(result =>{
        const itemsLists = `${result.title} - ${result.discription} - ${result.role}`
        return <li>{itemsLists}</li>
    })
    return(
        <div>
            <ul>{listItems}</ul>
        </div>
    )
})

}

console.log(topSearch)