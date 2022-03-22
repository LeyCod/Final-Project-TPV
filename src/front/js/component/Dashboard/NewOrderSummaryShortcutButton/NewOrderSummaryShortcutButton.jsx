import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles 
import "./new-order-summary-shortcut-button.css";

// Components
import { NewOrderSummaryModal } from "../Modal/NewOrderSummaryModal/NewOrderSummaryModal.jsx";

export const NewOrderSummaryShortcutButton = () => {
    const { store, actions } = useContext(Context);

    const [orderSummaryOnModal, setOrderSummaryOnModal] = useState(false);

    return (
        <div className="new-order-summary-shortcut-button d-xl-none">
            {orderSummaryOnModal
                ? <NewOrderSummaryModal show={orderSummaryOnModal} setOrderSummaryOnModal={setOrderSummaryOnModal} />
                : null
            }

            <button
                title="Ver pedido actual"
                type="button"
                className={`rounded-button ${Object.keys(store.orderItems).length === 0 ? "d-none" : ""}`}
                onClick={() => setOrderSummaryOnModal(true)}
            >
                <div>
                    <p className="fw-normal">Ver pedido</p>
                    <p><strong>{store.totalPrice} €</strong></p>
                </div>
            </button>
        </div>
    );
};
