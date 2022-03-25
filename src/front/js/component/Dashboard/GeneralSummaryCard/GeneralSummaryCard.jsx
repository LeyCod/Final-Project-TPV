import React from "react";
import PropTypes from "prop-types";

// Styles
import "./general-summary-card.css";

// Components
import ProgressBar from "react-bootstrap/ProgressBar";

export const GeneralSummaryCard = (props) => {
    const cardIcons = {
        "orders": <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
        </svg>,
        "tables": <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
            <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z" />
        </svg>
    }

    return (
        <div className="general-summary-card rounded-3 p-3 pb-0 bg-white shadow-sm">
            <div className="flex-grow-1">
                <div className="d-flex justify-content-start align-items-start gap-4">
                    <div className="general-summary-card-icon align-self-center">
                        {cardIcons[props.icon]}
                    </div>

                    <div>
                        <h3 className="m-0 fw-bold">{props.counter}</h3>

                        <h6 className="m-0 fw-normal">{props.title}</h6>
                    </div>
                </div>

                <hr />

                {props.progress
                    ? <ProgressBar animated label={`${props.progress}%`} now={props.progress} />
                    : <div>
                        <button
                            type="button"
                            className="d-flex align-items-center px-2 btn btn-sm theme-color-button shadow-none"
                            onClick={() => props.handleChangeView("orders")}
                        >
                            <i className="fas fa-paper-plane me-2"></i> <p className="h5 m-0 text-white">Ver todo</p>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

GeneralSummaryCard.propTypes = {
    counter: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    progress: PropTypes.number,
    handleChangeView: PropTypes.func
};
