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
            delay={2000}
            autohide
        >
            <Toast.Header>
                Woohoo, you're reading this text in a Toast!
            </Toast.Header>
        </Toast>
    );
};

Toasts.propTypes = {
    show: PropTypes.bool
};
