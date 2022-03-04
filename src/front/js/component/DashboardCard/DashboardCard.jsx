import React from "react";
import PropTypes from "prop-types";

// Styles
import "./dashboard-card.css";

export const DashboardCard = (props) => {
    return (
        <div className="dashboard-card p-3 shadow-sm">
            <div>
                <h4 className="m-0">{props.quantity}</h4>
                <h5 className="m-0 fw-normal">{props.title}</h5>
            </div>

            <i className={`fas fa-${props.icon} fa-4x`}></i>
        </div>
    );
};

DashboardCard.propTypes = {
    quantity: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string
};
