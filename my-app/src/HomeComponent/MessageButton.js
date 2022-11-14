import MessageShow from "./Message";

function DisplayMessage(props){
     return(
        <div>
            <button onClick={props.MessageShow}>Show Your Activity:</button>
        </div>
     );
};

export default DisplayMessage;