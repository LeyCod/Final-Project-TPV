import React from "react";
import PropTypes from "prop-types";

export const Features = (props) => {
  return (
    <div
      className={`row ${
        props.type ? "" : "flex-row-reverse"
      } justify-content-center`}
    >
      <div className="col-12 col-md-6 p-0">
        <img src={props.img} className="img-fluid" />
      </div>
      <div className="col-12 col-md-6 p-3">
        <h1 className={`${props.type ? "text-start" : "text-end"}`}>
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
  type: PropTypes.bool,
};
