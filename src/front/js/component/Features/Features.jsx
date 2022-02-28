import React from "react";
import "../Features/features.css";

export const Features = (props) => {
    console.log(props)
    return (
        <div id={props.id} className="container">
            <h5>{props.title}</h5>
            <h6>{props.message}</h6>
        </div>

    );
};
