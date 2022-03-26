import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";
import { MenuItemEditionModal } from "../Modal/MenuItemEditionModal/MenuItemEditionModal.jsx";

// Custom Hooks
import { useFetchMenuItems } from "../../CustomHooks/CustomHooks.jsx";

export const MenuItems = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company menu items */
    const { fetchMenuItemResult, error, loading } = useFetchMenuItems(store.menuItemEdition);

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <div className="col-12 col-lg-7 cards-grid-system">
                    {props.edit_item_control
                        ? <button
                            type="button"
                            className="menu-items-configuration-add btn flex-md-column shadow-sm"
                            onClick={() => actions.setMenuItemEdition("")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>

                            <p className="m-0">
                                <strong>Crear</strong> elemento
                            </p>
                        </button>
                        : null
                    }

                    {Object.keys(store.menuItems).map(menuItemIndex =>
                        <MenuItemCard
                            key={menuItemIndex}
                            item_index={menuItemIndex}
                            title={store.menuItems[menuItemIndex].name}
                            description={store.menuItems[menuItemIndex].description}
                            price={store.menuItems[menuItemIndex].price}
                            image_url={store.menuItems[menuItemIndex].image_url}
                            order_item_control={props.order_item_control}
                            item_edit_control={props.edit_item_control}
                        />
                    )}

                    {store.menuItemEdition === false ? null : <MenuItemEditionModal />}
                </div>
            )
};

MenuItems.propTypes = {
    company_id: PropTypes.node,
    order_item_control: PropTypes.bool,
    edit_item_control: PropTypes.bool
}
