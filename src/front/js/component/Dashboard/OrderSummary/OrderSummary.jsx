import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "./order-summary.css";

// Components
import { NewOrderItemControl } from "../NewOrderItemControl/NewOrderItemControl.jsx";
import { SubmitOrderButton } from "../SubmitOrderButton/SubmitOrderButton.jsx";

export const OrderSummary = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTableID].items;

    return (
        <div id="order-summary-container">
            <div className="order-summary">
                <div className="order-summary-title">
                    <div>
                        <h4>Resumen del pedido</h4>
                        <p className="m-0">Detalle de los productos añadidos:</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-receipt-cutoff" viewBox="0 0 16 16">
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                            <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
                        </svg>
                    </div>
                </div>

                <hr />

                <div className="order-summary-body scrollbar-custom-bg">
                    {Object.keys(orderItems).map(itemIndex =>
                        <div key={itemIndex} className="order-summary-item">
                            <div>
                                <small className="text-nowrap">{orderItems[itemIndex]} uds</small>
                                <p>
                                    {store.menuItems[itemIndex].name} <br />
                                    <small className="text-muted order-summary-item-description">{store.menuItems[itemIndex].description}</small>
                                </p>
                            </div>

                            <div>
                                <p className="m-0 fw-normal">{Math.floor(store.menuItems[itemIndex].price * orderItems[itemIndex] * 100) / 100} €</p>

                                <div className="text-nowrap">
                                    <NewOrderItemControl key={itemIndex} item_index={itemIndex} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <hr />

                <div id="order-summary-total">
                    <p className="h5 fw-normal">Total</p>
                    <p className="h5">{store.storedOrders[store.activeTableID].totalPrice} €</p>
                </div>

                {/* <SubmitOrderButton /> */}
            </div>
        </div>
    );
};
