import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import "../../../../css/modal.css"

// Components
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { MenuItemEditionModal } from "../Modal/MenuItemEditionModal/MenuItemEditionModal.jsx";

// Custom Hooks
import { useFetchMenuItems } from "../../CustomHooks/CustomHooks.jsx";

export const MenuEditItemControl = (props) => {
    const [editItem, setEditItem] = useState(false);

    /* Fetch company menu items */    
    const { fetchMenuItemResult, error, loading } = useFetchMenuItems(editItem);

    return loading
        ? null
        : error
            ? <ErrorModal show={true} />
            : (<div className="edit-item-control">
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
