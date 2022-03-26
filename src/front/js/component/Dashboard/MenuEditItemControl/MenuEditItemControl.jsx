import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "../../../../css/modal.css"

export const MenuEditItemControl = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="edit-item-control">
            <button
                type="button"
                className="btn btn-sm xs-button outline-theme-color-button shadow-none"
                onClick={() => actions.setActiveItemEdition(props.item_index)}
            >
                <i className="fas fa-highlighter"></i>
            </button>
        </div>
    );
};

MenuEditItemControl.propTypes = {
    item_index: PropTypes.string
};
