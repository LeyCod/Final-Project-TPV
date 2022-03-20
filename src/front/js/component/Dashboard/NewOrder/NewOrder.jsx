import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";
import { PropTypes } from "prop-types";

// Styles
import "./new-order.css";

// Functions
import { apiGetMenuItems } from "../../../service/menu-item";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../Modal/ErrorModal/ErrorModal.jsx";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";
import { NewOrderSummary } from "../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrder = (props) => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true); // Loading spinner control
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
            : (
                <div className="dashboard-view-content p-2 p-md-3 p-lg-4">
                    <div className="row justify-content-start gap-1" id="new-order-wrapper">
                        <div className="col-12 col-lg-7">
                            {
                                Object.keys(store.menuItems).map(menuItemIndex =>
                                    <MenuItemCard
                                        key={menuItemIndex}
                                        item_index={menuItemIndex}
                                        title={store.menuItems[menuItemIndex].name}
                                        description={store.menuItems[menuItemIndex].description}
                                        price={store.menuItems[menuItemIndex].price}
                                        image_url={store.menuItems[menuItemIndex].image_url}
                                        order_item_control={true}
                                        item_edit_control={true}
                                    />
                                )
                            }
                        </div>

                        <div className="d-none d-xl-block col-xl-3 flex-grow-1 ps-0">
                            <NewOrderSummary />
                        </div>
                    </div>
                </div>
            );
};

NewOrder.propTypes = {
    company_id: PropTypes.number
}
