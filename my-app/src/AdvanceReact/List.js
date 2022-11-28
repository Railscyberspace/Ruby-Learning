

const data1 = [
//     {
//     id: 1,
//     title: "railprofile",
//     discription: "github",
//     image:"https://github.com/RailsAbam",
//     role: "junior dev",

//      },
//       {
//         id:2, 
//         title:"coraprofile",
//         discription: "github",
//         image:"https://github.com/yocontra/react-responsive/commits?author=yocontra",
//         role:"senior dev",

//     },
//     {
//     id:3, 
//         title:"pekerprofile",
//         discription: "github",
//         image:"https://github.com/pekeler",
//         role:"peker dev",

//     }
// 

{
  name: "Chocolate Cake",
  calories: 400,
  createdAt: "2022-09-01",
},
{
  name: "Ice Cream",
  calories: 200,
  createdAt: "2022-01-02",
},
{
  name: "Tiramisu",
  calories: 300,
  createdAt: "2021-10-03",
},
{
  name: "Cheesecake",
  calories: 600,
  createdAt: "2022-01-04",
},


]

const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
      .filter((data1) => {
        return data1.calories < 500;
      })
      .sort((a, b) => { 
        return a.calories - b.calories; 
      })
      .map((data1) => { 
        return ( 
          <li>
            {data1.name} - {data1.calories} cal 
          </li> 
        ); 
      }); 
    return <ul>{lowCaloriesDesserts}</ul>; 
   }
   
   export default DessertsList;
   