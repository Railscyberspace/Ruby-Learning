import WeekDay from "./WeekDay";
import WeekEnd from "./WeekEnds";


function Message(props){
    const day = new Date().getDate();
    if(day >= 1 && day <= 5){
        return <WeekEnd/>
    }
      return  <WeekDay/>
}
export default Message;