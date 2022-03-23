import React, { useState } from "react";

// Components
import Modal from "react-bootstrap/Modal";

export const OrderSubmittedModal = () => {
    const [showedModal, setShowedModal] = useState(true);

    return (
        <Modal id="order-summary-modal"
            show={showedModal}
            onHide={() => setShowedModal(false)}
        >
            <Modal.Header closeButton className="border-0 pb-0" />
            <Modal.Body className="pt-0">
                perfechava
            </Modal.Body>
        </Modal>
    );
};
