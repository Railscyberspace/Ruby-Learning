import Message from "./Message";

function DisplayMessage(props){
     return(
        <div>
            <button onClick={Message.DisplayMessage}>Show Your Activity:</button>
        </div>
     );
};

export default DisplayMessage;