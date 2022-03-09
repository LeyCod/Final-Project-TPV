import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Components
import Modal from "react-bootstrap/Modal";

export const SuccessModalOnRegister = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Body>
                <p className="h4 text-center">¡Tu registro ha sido completado satisfactoriamente!</p> 
                <br/>
                <p className="text-center">Muchas gracias por formar parte de <strong>MasterGest</strong>.<br /><br /> <i>Inicia sesión</i> para acceder a la plataforma y comienza ya a configurar tu negocio.</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <Link to="/login" className="btn green-button flex-grow-1">
                    Iniciar sesión
                </Link>
            </Modal.Footer>
        </Modal>
    );
};

SuccessModalOnRegister.propTypes = {
    show: PropTypes.bool
};
