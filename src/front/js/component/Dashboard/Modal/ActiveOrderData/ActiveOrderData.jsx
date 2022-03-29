import React, { useContext } from "react";
import { Context } from "../../../../store/appContext";

// Styles
import "./active-order-data.css";

export const ActiveOrderData = (props) => {
    const { store, actions } = useContext(Context);

    const processedItems = store.activeTableOrder.items;

    return Object.keys(store.activeTableOrder).length !== 0 && Object.keys(store.menuItems).length !== 0
        ? (
            <div className="modal fade" id="ActiveOrderData">
                <div className="modal-dialog" id="active-order-data-container">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5>Productos consumidos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className="active-order-data-wrapper">
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
                                <p className="h5">{store.activeTableOrder.totalPrice} €</p>
                            </div>

                            <hr />

                            <div className="mt-3 text-center">
                                <button
                                    type="button"
                                    className="btn theme-color-button shadow-none"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
        : null;
};
