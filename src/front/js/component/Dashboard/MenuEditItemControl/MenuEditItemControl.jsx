import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import "../../../../assets/css/modal.css"

// Components
import { MenuItemEditionModal } from "../Modal/MenuItemEditionModal/MenuItemEditionModal.jsx";

export const MenuEditItemControl = (props) => {
    const [editItem, setEditItem] = useState(false);

    return (
        <div className="edit-item-control">
            {editItem ? <MenuItemEditionModal show={true} new_item={false} item_index={props.item_index} setEditItem={setEditItem} /> : null}
            
            <button
                type="button"
                className="btn btn-sm xs-button outline-theme-color-button shadow-none"
                onClick={() => setEditItem(true)}
            >
                <i className="fas fa-highlighter"></i>
            </button>
        </div>
    );
};

MenuEditItemControl.propTypes = {
    item_index: PropTypes.string
};
