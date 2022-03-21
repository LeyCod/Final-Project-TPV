import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Modal from "react-bootstrap/Modal";

export const ErrorModal = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Body className="text-center">                
                <p><strong>Se ha producido un error</strong>.</p>                
                <p className="m-0">Por favor, inténtelo de nuevo más tarde.</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Link to="/" className="btn green-button flex-grow-1 shadow-none">
                    Recargar página
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

ErrorModal.propTypes = {
    show: PropTypes.bool
};
