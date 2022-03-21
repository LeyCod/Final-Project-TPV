import React from "react";
import PropTypes from "prop-types"

// Styles 
import "./new-order-button.css";

export const NewOrderButton = (props) => {
    return (
        <div className="dashboard-new-order-button">
            <button
                title="Crear nuevo pedido"
                type="button"
                onClick={() => props.handleChangeView("new_order")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </button>
        </div>
    );
};

NewOrderButton.proptypes = {
    handleChangeView: PropTypes.func
}
