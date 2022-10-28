function Color(props){
    const design = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"

    }

    return(
        <div style = {design}>
            {props.children}

        </div>
    );
};

export default Color;