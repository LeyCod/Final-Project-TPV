import React from "react";
import PropTypes from "prop-types";

// Styles
import "./table-card.css";

// Component
import QRCode from "react-qr-code";

export const TableCard = (props) => {
    return (
        <div className="table-card">
            <p className="fw-bold mb-0 text-center">{props.name}</p>
            <i className="fa-solid fa-plate-utensils"></i>
            <QRCode value={`${window.location.host}/clients/${props.id}`} size="128" level="M" />
        </div>
    );
};

TableCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
};


//TODO Boton que lleva a Order y ver lo que lleva pedido.
