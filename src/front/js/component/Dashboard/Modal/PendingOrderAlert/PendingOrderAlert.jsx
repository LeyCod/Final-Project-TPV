import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./pending-order-alert.css";

// Components
import Modal from "react-bootstrap/Modal";

export const PendingOrderAlert = (props) => {
    const { store, actions } = useContext(Context);

    const processedItems = store.activeTableOrder.items;

    return Object.keys(store.activeTableOrder).length !== 0
        ? (
            <Modal id="pending-order-alert-container"
                show={true}
                onHide={() => props.setShowPendingOrderAlert(false)}
            >
                <Modal.Header closeButton>
                    <h5>Información</h5>
                </Modal.Header>

                <Modal.Body className="p-3">                    
                    <div>
                        <p className="bg-secondary bg-opacity-25 text-center">Productos consumidos hasta el momento:</p>

                        <div className="pending-order-alert-body">
                            {
                                Object.keys(processedItems).map(itemIndex =>
                                    <div key={itemIndex} className="pending-order-alert-item">
                                        <div>
                                            <small className="text-nowrap">{processedItems[itemIndex]}x</small>
                                            <p>{store.menuItems[itemIndex] === undefined ? "" : store.menuItems[itemIndex].name}</p>
                                        </div>

                                        <div>
                                            <p className="m-0 fw-normal text-nowrap">{Math.floor(store.menuItems[itemIndex].price * processedItems[itemIndex] * 100) / 100} €</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <hr />

                        <div id="pending-order-alert-total">
                            <p className="h5 fw-normal">Total</p>
                            <p className="h5">{store.activeTableOrder.totalPrice} €</p>
                        </div>

                        <div className="mt-3 text-center">
                            <button
                                type="button"
                                className="btn theme-color-button shadow-none"
                                onClick={() => props.setShowPendingOrderAlert(false)}
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        )
        : null;
};

PendingOrderAlert.propTypes = {
    setShowPendingOrderAlert: PropTypes.func
}
