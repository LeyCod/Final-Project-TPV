import React from "react";
import PropTypes from "prop-types";

// Styles
import "./table-card.css";

// Component
import QRCode from "react-qr-code";

export const TableCard = (props) => {
    return (
        <div className="table-card">
            <div className="row">
            <div className="d-flex justify-content-end">
                <button type="button" className="btn-close" disabled aria-label="Close"></button>
            </div>
            <p className="fw-bold mb-0 text-center">{props.name} <i class="fa-duotone fa-utensils"></i></p>
            <div className="row ">
                <div className="d-flex justify-content-evenly">
                    <button type="button" className="btn btn-light btn-sm position-relative">
                        Pedidos
                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                        </span>
                    </button>
                    <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        QR
                    </button>
                </div>
                <div className="collapse" id="collapseExample">
                    <div className="d-flex justify-content-center">
                        <QRCode value={`${window.location.host}/clients/${props.id}`} size="128" level="M" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

TableCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
};
