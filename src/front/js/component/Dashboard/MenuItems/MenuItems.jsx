import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Functions
import { apiGetMenuItems } from "../../../service/menu-item";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";

export const MenuItems = (props) => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    useEffect(() => {
        async function getMenuItems() {
            try {
                const response = await apiGetMenuItems(props.company_id ? props.company_id : store.loggedUserCompanyData.id);
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    actions.setMenuItems(data);
                    setFetchError(false);
                }
                else {
                    console.error(status);
                    setFetchError(true);
                }
            }
            catch (err) {
                console.error(err);
                setFetchError(true);
            }
            finally {
                setLoading(false);
            }
        }

        getMenuItems();
    }, []);

    return loading
        ? <Spinner />
        : fetchError
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
