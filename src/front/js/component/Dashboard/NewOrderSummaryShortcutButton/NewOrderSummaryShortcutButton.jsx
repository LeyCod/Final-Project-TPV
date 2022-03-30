import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles 
import "./new-order-summary-shortcut-button.css";

export const NewOrderSummaryShortcutButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;

    const existingOrder = Object.keys(store.activeTableOrder).length !== 0;
    const existingData = Object.keys(orderItems).length !== 0;

    return (
            <div className="new-order-summary-shortcut-button d-xl-none">
                <button
                    title="Ver pedido actual"
                    type="button"
                    className={`rounded-button ${!existingOrder && !existingData ? "d-none" : ""}`}
                    data-bs-toggle="modal"
                    data-bs-target="#OrderSummaryModal"
                >
                    <div>
                        {
                            existingOrder && existingData
                                ? <p className="fw-normal"><strong>Añadir</strong> al pedido por <strong>{Math.floor(store.storedOrders[store.activeTable.id].totalPrice * 100) / 100} €</strong></p>
                                : existingOrder && !existingData
                                    ? <p className="fw-normal"><strong>Ver</strong> pedido actual de <strong>{Math.floor(store.activeTableOrder.totalPrice * 100) / 100} €</strong></p>
                                    : !existingOrder && existingData
                                        ? <p className="fw-normal"><strong>Crear</strong> pedido por <strong>{Math.floor(store.storedOrders[store.activeTable.id].totalPrice * 100) / 100} €</strong></p>
                                        : null
                        }
                    </div>
                </button>
            </div>
        );
};
