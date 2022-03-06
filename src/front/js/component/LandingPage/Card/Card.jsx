import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card border-0">
        <div className="text-center py-2 ">
          <i className={`fa-4x fas fa-${props.icono}`}></i>
        </div>

        <div className="card-body text-center p-0 pt-2">
          <h6>{props.title}</h6>
          <p className="card-text">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icono: PropTypes.string,
};
