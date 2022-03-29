import React from "react";
import "./spinner.css";

// Components
import ScaleLoader from "react-spinners/ScaleLoader";

export const Spinner = () => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner">
                <div className="d-flex align-items-center">
                    <h5 className="me-2 fw-bold">Cargando</h5>
                    <ScaleLoader size={100} />
                </div>
            </div>
        </div>
    );
};
