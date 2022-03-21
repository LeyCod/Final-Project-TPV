import React from "react";
import PropTypes from "prop-types";

// Components
import Modal from "react-bootstrap/Modal";

export const NewOrderSelectTable = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton className="border-0 pb-0" />
            <Modal.Body className="pt-0">
                // !Aquí se mostrarán las mesas cuando esté hecho el back
            </Modal.Body>
        </Modal>
    );
};

NewOrderSelectTable.propTypes = {
    show: PropTypes.bool,
};
