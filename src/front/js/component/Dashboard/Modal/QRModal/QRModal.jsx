import React from "react";
import PropTypes from "prop-types";

// Styles
import "./qr-modal.css";

// Components
import Modal from 'react-bootstrap/Modal';
import QRCode from "react-qr-code";

export const QRModal = (props) => {
    return (
        <Modal id="qr-modal"
            show={true}
            onHide={() => props.setShowQR(false)}
        >
            <Modal.Header closeButton>
                <h5>{props.table_name} - QR</h5>
            </Modal.Header>

            <Modal.Body>
                <QRCode value={props.qr_url} size={150} level="M" />;
            </Modal.Body>
        </Modal >
    );
};

QRModal.propTypes = {
    table_name: PropTypes.string,
    setShowQR: PropTypes.func,
    qr_url: PropTypes.string
}
