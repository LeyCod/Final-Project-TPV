import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types"

// Styles 
import "./new-order-button.css";

// Components
import { NewOrderSelectTable } from "../Modal/NewOrderSelectTable/NewOrderSelectTable.jsx";

export const NewOrderButton = (props) => {
    const { store, actions } = useContext(Context);

    const [showTableSelection, setShowTableSelection] = useState(false);

    const handleNewOrder = () => {
        setShowTableSelection(true);
    }

    return (
        <div className="dashboard-new-order-button">
            {
                showTableSelection
                    ? <NewOrderSelectTable setShowTableSelection={setShowTableSelection} handleChangeView={props.handleChangeView} />
                    : <button
                        title="Gestionar pedido"
                        type="button"
                        onClick={handleNewOrder}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
            }
        </div>
    );
};

NewOrderButton.proptypes = {
    handleChangeView: PropTypes.func
}
