import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./new-order-item-control.css";

export const NewOrderItemControl = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="new-order-item-control">
            <button
                type="button"
                className={`btn btn-sm xs-button outline-theme-color-button shadow-none ${store.orderItems[props.item_index] > 0 ? "" : "d-none"}`}
                onClick={() => actions.addOrderItem(props.item_index, false)}
            >

                <i className="fas fa-minus align-middle"></i>
            </button>

            <span className={`${store.orderItems[props.item_index] > 0 ? "" : "d-none"}`}>{store.orderItems[props.item_index]}</span>

            <button
                type="button"
                className="btn btn-sm xs-button theme-color-button shadow-none"
                onClick={() => actions.addOrderItem(props.item_index, true)}
            >

                <i className="fas fa-plus align-middle"></i>
            </button>
        </div>
    );
};

NewOrderItemControl.propTypes = {
    item_index: PropTypes.string
};
