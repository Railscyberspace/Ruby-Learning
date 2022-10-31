import WeekDay from "./WeekDay";
import WeekEnd from "./WeekEnd";


function Message(){
    const day = new Date().getDate();
    if(day >= 1 && day <= 5){
        return <WeekEnd/>
    }
      return  <WeekDay/>
}
export default Message;