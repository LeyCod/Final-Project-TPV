import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles 
import "./new-order-summary-shortcut-button.css";

// Components
import { OrderSummaryModal } from "../Modal/OrderSummaryModal/OrderSummaryModal.jsx";

export const NewOrderSummaryShortcutButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;

    return Object.keys(orderItems).length === 0 && Object.keys(store.activeTableOrder).length === 0
        ? null
        : (
            <div className="new-order-summary-shortcut-button d-xl-none">
                <OrderSummaryModal />

                <button
                    title="Ver pedido actual"
                    type="button"
                    className="rounded-button"
                    onClick={() => actions.setOrderSummaryOnModal(true)}
                >
                    <div>
                        <p className="fw-normal"><strong>Ver</strong> pedido actual</p>                        
                    </div>
                </button>
            </div>
        );
};
