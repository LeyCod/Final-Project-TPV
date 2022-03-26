import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";

// Custom Hooks
import { useFetchMenuItems } from "../../CustomHooks/CustomHooks.jsx";

export const MenuItems = (props) => {
    const { store, actions } = useContext(Context);

    /* Fetch company menu items */
    const { fetchMenuItemResult, error, loading } = useFetchMenuItems();

    return loading
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : Object.keys(store.menuItems).map(menuItemIndex =>
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
            )
};

MenuItems.propTypes = {
    company_id: PropTypes.node,
    order_item_control: PropTypes.bool,
    edit_item_control: PropTypes.bool
}
