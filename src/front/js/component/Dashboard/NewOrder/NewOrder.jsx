import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./new-order.css";

// Components
import { MenuItems } from "../MenuItems/MenuItems.jsx";
import { OrderSummary } from "../OrderSummary/OrderSummary.jsx";
import { OrderSummaryModal } from "../Modal/OrderSummaryModal/OrderSummaryModal.jsx";
import { NewOrderSummaryShortcutButton } from "../NewOrderSummaryShortcutButton/NewOrderSummaryShortcutButton.jsx";
import { ActiveOrderData } from "../Modal/ActiveOrderData/ActiveOrderData.jsx";

export const NewOrder = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="dashboard-view-content p-3 p-lg-4">
            <OrderSummaryModal />
            <ActiveOrderData />
            
            <div className="row justify-content-start gap-1" id="new-order-wrapper">
                <div className="col-12 d-none d-md-block">
                    <p className="view-description">
                        Añade productos a la mesa <span className="fw-bold">{store.activeTable.name}</span>.
                    </p>
                </div>

                <MenuItems order_item_control={true} />

                <div className="d-none d-xl-block col-xl-3 flex-grow-1 ps-0">
                    <OrderSummary />                    
                </div>
            </div>

            <NewOrderSummaryShortcutButton />
        </div>
    );
};
