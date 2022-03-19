import React from "react";
import PropTypes from "prop-types";

// Styles
import "./new-order-item-control.css";

export const NewOrderItemControl = (props) => {
    return (
        <div className="new-order-item-control">
            <button type="button" className="btn btn-sm xs-button outline-theme-color-button shadow-none">
                <i className="fas fa-minus align-middle"></i>
            </button>

            <span>2</span>

            <button type="button" className="btn btn-sm xs-button theme-color-button shadow-none">
                <i className="fas fa-plus align-middle"></i>
            </button>
        </div>
    );
};

NewOrderItemControl.propTypes = {
    item_id: PropTypes.number
};
