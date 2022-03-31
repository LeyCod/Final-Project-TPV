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
                <div className="d-flex flex-column flex-nowrap justify-content-center align-items-center gap-3">
                    <QRCode value={props.qr_url} size={150} level="M" />

                    <a href={props.qr_url} target="_blank" className="d-flex align-items-center justify-content-center btn btn-secondary px-3 py-1 gap-2 shadow-none">
                        <i className="fas fa-external-link-alt"></i> Ir
                    </a>
                </div>
            </Modal.Body>
        </Modal >
    );
};

QRModal.propTypes = {
    table_name: PropTypes.string,
    setShowQR: PropTypes.func,
    qr_url: PropTypes.string
}
