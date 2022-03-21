import React from "react";
import PropTypes from "prop-types";

// Styles
import "./new-order-summary-modal.css";

// Components
import Modal from "react-bootstrap/Modal";
import { NewOrderSummary } from "../../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrderSummaryModal = (props) => {
    return (
        <Modal id="new-order-summary-modal"
            show={props.show}
            onHide={() => props.setOrderSummaryOnModal(false)}
        >
            <Modal.Header closeButton className="border-0 pb-0" />
            <Modal.Body className="pt-0">
                <NewOrderSummary />
            </Modal.Body>
        </Modal>
    );
};

NewOrderSummaryModal.propTypes = {
    show: PropTypes.bool,
    setOrderSummaryOnModal: PropTypes.func
};
