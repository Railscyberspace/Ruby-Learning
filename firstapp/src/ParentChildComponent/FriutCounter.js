import React from "react";

function FruitCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitCounter;