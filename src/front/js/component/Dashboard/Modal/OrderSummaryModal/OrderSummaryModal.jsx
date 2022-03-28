import React from "react";

// Styles
import "./order-summary-modal.css";

// Components
import { OrderSummary } from "../../OrderSummary/OrderSummary.jsx";

export const OrderSummaryModal = () => {
    return (
        <div className="modal fade" id="OrderSummaryModal">
            <div className="modal-dialog" id="order-summary-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>Información</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};
