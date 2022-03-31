import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./active-order-data.css";

// Components
import Modal from 'react-bootstrap/Modal';

export const ActiveOrderData = (props) => {
    const { store, actions } = useContext(Context);

    const processedItems = store.activeTableOrder.items;

    return Object.keys(store.activeTableOrder).length !== 0 && Object.keys(store.menuItems).length !== 0
        ? (
            <Modal
                show={props.show}
                onHide={() => props.setShowDetails(false)}
                id="active-order-data-container"
            >
                <Modal.Header closeButton>
                    <h5>Productos consumidos</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="active-order-data-wrapper scrollbar-custom-bg">
                        <div className="active-order-data-body">
                            {
                                Object.keys(processedItems).map(itemIndex =>
                                    <div key={itemIndex} className="active-order-data-item">
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
                    </div>

                    <hr />

                    <div id="active-order-data-total">
                        <p className="h5 fw-normal">Total</p>
                        <p className="h5">{Math.floor(store.activeTableOrder.totalPrice * 100) / 100} €</p>
                    </div>

                    <hr />

                    <div className="mt-3 text-center">
                        <button
                            type="button"
                            className="btn theme-color-button shadow-none"
                            onClick={() => props.setShowDetails(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        )
        : null;
};

ActiveOrderData.propTypes = {
    setShowDetails: PropTypes.func
}
