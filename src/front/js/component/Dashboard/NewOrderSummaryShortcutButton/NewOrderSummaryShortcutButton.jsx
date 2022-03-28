import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles 
import "./new-order-summary-shortcut-button.css";

// Components
import { OrderSummaryModal } from "../Modal/OrderSummaryModal/OrderSummaryModal.jsx";

export const NewOrderSummaryShortcutButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;

    const existingOrder = Object.keys(store.activeTableOrder).length !== 0;
    const existingData = Object.keys(orderItems).length !== 0;

    return (
            <div className="new-order-summary-shortcut-button d-xl-none">
                <OrderSummaryModal />

                <button
                    title="Ver pedido actual"
                    type="button"
                    className={`rounded-button ${!existingOrder && !existingData ? "d-none" : ""}`}
                    onClick={() => actions.setOrderSummaryOnModal(true)}
                >
                    <div>
                        {
                            existingOrder && existingData
                                ? <p className="fw-normal"><strong>Añadir</strong> al pedido por <strong>{store.storedOrders[store.activeTable.id].totalPrice} €</strong></p>
                                : existingOrder && !existingData
                                    ? <p className="fw-normal"><strong>Ver</strong> pedido actual de <strong>{store.activeTableOrder.totalPrice} €</strong></p>
                                    : !existingOrder && existingData
                                        ? <p className="fw-normal"><strong>Crear</strong> pedido por <strong>{store.storedOrders[store.activeTable.id].totalPrice} €</strong></p>
                                        : null
                        }
                    </div>
                </button>
            </div>
        );
};
