import React from "react";
import PropTypes from "prop-types";

export const Features = (props) => {
  return (
    <div className={`row ${!props.reverse ? "" : "flex-row-reverse"} justify-content-evenly gap-2 my-5 py-2`}>
      <div className="col-11 col-md-5">
        <img src={props.img} className="img-fluid" />
      </div>

      <div className="col-11 col-md-5">
        <h1>
          {props.title}
        </h1>
        {props.text}
      </div>
    </div>
  );
};

Features.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  reverse: PropTypes.bool,
};
