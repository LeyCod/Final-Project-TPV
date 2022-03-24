import React, { useState } from "react";
import PropTypes from "prop-types";

// Styles
import "./toasts.css";

// Components
import Toast from "react-bootstrap/Toast";

export const Toasts = (props) => {
    const [show, setShow] = useState(true);

    return (
        <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2500}
            autohide
        >
            <Toast.Header>{props.message}</Toast.Header>
        </Toast>
    );
};

Toasts.propTypes = {
    show: PropTypes.bool,
    message: PropTypes.string
};
