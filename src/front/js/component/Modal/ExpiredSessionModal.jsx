import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Modal from "react-bootstrap/Modal";
import secondaryBackground from "../../../assets/img/FormsBG.jpg";

export const ExpiredSessionModal = (props) => {
    return (
        <Modal 
            show={props.show}
            style={{ backgroundImage: `url(${secondaryBackground})` }}
        >
            <Modal.Body>
                <p className="h4 text-center">¡Sesión expirada!</p> 
                <br/>
                <p className="text-center">Por favor, vuelve a iniciar sesión para continuar usando la plataforma. Muchas gracias.</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Link to="/login" className="btn green-button flex-grow-1 shadow-none">
                    Iniciar sesión
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

ExpiredSessionModal.propTypes = {
    show: PropTypes.bool
};

