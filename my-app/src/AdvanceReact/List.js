



const DessertsList = (props) => {
    const lowCaloriesDesserts = props.data
      .filter((datas) => {
        return datas.calories < 500;
      })
      .sort((a, b) => { 
        return a.calories - b.calories; 
      })
      .map((datas) => { 
        return ( 
          <li>
            {datas.name} - {datas.calories} cal </li> 
        ); 
      }); 
    return <ul>{lowCaloriesDesserts}</ul>; 
   }
   
   export default DessertsList;
   