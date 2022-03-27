import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Components
import Modal from "react-bootstrap/Modal";

export const PendingOrderAlert = (props) => {
    const { store, actions } = useContext(Context);

    const processedItems = store.activeTableOrder.items;

    return Object.keys(store.activeTableOrder).length !== 0
        ? (
            <Modal id="new-order-select-table"
                show={true}
                onHide={() => props.setShowPendingOrderAlert(false)}
            >
                <Modal.Header closeButton>
                    <h5>Información</h5>
                </Modal.Header>

                <Modal.Body className="p-3">
                    <p>Ya hay un pedido creado en esta mesa. Recuerda que puedes seguir añadiendo productos al mismo antes <i>finalizar y pagar</i>.</p>

                    <div>
                        <p className=" bg-secondary bg-opacity-25 text-center">Lo que llevas consumido hasta el momento:</p>
                        {Object.keys(processedItems).map(itemIndex =>
                            <div key={itemIndex} className="order-summary-item">
                                <div>
                                    <small className="text-nowrap">{processedItems[itemIndex]} x</small>

                                    {store.menuItems[itemIndex] === undefined ? "" : store.menuItems[itemIndex].name}

                                </div>

                                <div>
                                    <p className="m-0 fw-normal text-nowrap">{Math.floor(store.menuItems[itemIndex].price * processedItems[itemIndex] * 100) / 100} €</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Modal.Body>

                <Modal.Footer className="justify-content-center">
                    <button
                        type="button"
                        className="btn btn-sm theme-color-button shadow-none"
                        onClick={() => props.setShowPendingOrderAlert(false)}
                    >
                        Entendido
                    </button>
                </Modal.Footer>
            </Modal >
        )
        : null;
};

PendingOrderAlert.propTypes = {
    setShowPendingOrderAlert: PropTypes.func
}
