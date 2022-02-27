import React from "react";
import "../Card/card.css"

 export const Card = (props) => {
   console.log(props)
    return (
        <div className="row">
          <div className="column">
              <div  className={"card "+props.nameClass } >
                    <div className="card-body">
                      <h5 className={props.title}></h5>
                      <p className={props.message}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
              </div>
        </div>
            
            
    );
};

