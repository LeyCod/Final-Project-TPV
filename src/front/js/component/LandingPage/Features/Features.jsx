import React from "react";
import PropTypes from "prop-types";

export const Features = (props) => {
  return (
    <div className={`row ${!props.reverse ? "" : "flex-row-reverse"} justify-content-center gap-3 my-5 py-3`}>
      <div className="col-11 col-md-5">
        <img src={props.img} className="img-fluid" />
      </div>

      <div className={`col-11 col-md-5 ${props.reverse ? "text-start" : "text-end"}`}>
        <h1 className="feature-h1">
          {props.title}
        </h1>

        <p className="feature-p">{props.text}</p>
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
