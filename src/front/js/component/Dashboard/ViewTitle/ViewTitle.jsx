import React from "react";
import PropTypes from "prop-types";

export const ViewTitle = (props) => {
    return (
        <div className="dashboard-view-title">
            <div>
                <div className="left-arrow"></div>
                <h4 className="fw-normal">{props.title}</h4>
                <div className="right-arrow"></div>
            </div>
        </div>
    );
};

ViewTitle.propTypes = {
    title: PropTypes.string
};
