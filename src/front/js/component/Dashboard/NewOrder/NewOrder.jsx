import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./new-order.css";

// Functions
import { apiGetMenuItems } from "../../../service/menu-item";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard.jsx";
import { NewOrderSummary } from "../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrder = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true); // Loading spinner control
    
    useEffect(() => {
        async function getMenuItems() {
            try {
                const response = await apiGetMenuItems(store.loggedUserCompanyData.id);
                const data = await response.json();
                const status = response.status;

                if (status === 200) {
                    actions.setMenuItems(data);
                }
                else {
                }
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        }

        getMenuItems();
    }, []);

    return loading
        ? <Spinner />
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
