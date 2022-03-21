import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

export const MenuEditItemControl = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="edit-item-control">
            <button
                type="button"
                className="btn btn-sm xs-button outline-theme-color-button shadow-none"
                //onClick={() => } // Aquí en onclick debe abrirse un modal que permita modificar el menu item y también eliminarlo
            >
                <i class="fas fa-highlighter"></i>
            </button>
        </div>
    );
};

MenuEditItemControl.propTypes = {
    item_index: PropTypes.string
};
