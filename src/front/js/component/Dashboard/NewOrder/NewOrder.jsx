import React from "react";
import { PropTypes } from "prop-types";

// Styles
import "./new-order.css";

// Components
import { MenuItems } from "../MenuItems/MenuItems.jsx";
import { NewOrderSummary } from "../NewOrderSummary/NewOrderSummary.jsx";

export const NewOrder = (props) => {
    return (
        <div className="dashboard-view-content p-2 p-md-3 p-lg-4">
            <div className="row justify-content-start gap-1" id="new-order-wrapper">
                <div className="col-12 col-lg-7 cards-grid-system">
                    <MenuItems company_id={props.company_id ? props.company_id : false} order_item_control={true} />
                </div>

                <div className="d-none d-xl-block col-xl-3 flex-grow-1 ps-0">
                    <NewOrderSummary />
                </div>
            </div>
        </div>
    );
};

NewOrder.propTypes = {
    company_id: PropTypes.number
}
