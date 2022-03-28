import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";

// Styles
import "./order-summary-modal.css";

// Components
import Modal from "react-bootstrap/Modal";
import { OrderSummary } from "../../OrderSummary/OrderSummary.jsx";

export const OrderSummaryModal = () => {
    const { store, actions } = useContext(Context);

    return (
        <Modal id="order-summary-modal"
            show={store.orderSummaryOnModal}
            onHide={() => actions.setOrderSummaryOnModal(false)}
        >
            <Modal.Header closeButton className="bg-white" />
            <Modal.Body className="pt-0">
                <OrderSummary />
            </Modal.Body>
        </Modal>
    );
};
