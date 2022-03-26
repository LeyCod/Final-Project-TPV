import React from "react";
import PropTypes from "prop-types";

// Styles
import "./order-summary-modal.css";

// Components
import Modal from "react-bootstrap/Modal";
import { OrderSummary } from "../../OrderSummary/OrderSummary.jsx";

export const OrderSummaryModal = (props) => {
    return (
        <Modal id="order-summary-modal"
            show={props.show}
            onHide={() => props.setOrderSummaryOnModal(false)}
        >
            <Modal.Header closeButton className="bg-white" />
            <Modal.Body className="pt-0">
                <OrderSummary />
            </Modal.Body>
        </Modal>
    );
};

OrderSummaryModal.propTypes = {
    show: PropTypes.bool,
    setOrderSummaryOnModal: PropTypes.func
};
