
// import tubularwhite200 from '../Batteries/tubularwhite200.jpg';

const Searching = [

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

function Search (props){
    const listItems = Searching.map(results =>{
        const itemsList = `${results.title} : ${results.role}`
        return <li>{itemsList}</li>
    })
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>

    )
}

export default Search;