import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../store/appContext";

// Functions
import { apiGetActiveOrder, apiOrderSubmit } from "../../../service/order";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";

export const SubmitOrderButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;
    const [activeOrder, setActiveOrder] = useState(false);

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);
    const [orderSubmitted, setOrderSubmitted] = useState(false);

    const handleSendOrder = async () => {
        setLoading(true);

        let body = {
            "table_id": store.activeTable.id,
            "company_id": store.companyID,
            "menu_items": []
        }

        Object.keys(orderItems).forEach(menuItemID => {
            let menuItemData = {
                "menu_item_id": store.menuItems[menuItemID].id,
                "price": store.menuItems[menuItemID].price,
                "quantity": orderItems[menuItemID]
            }

            body.menu_items = [...body.menu_items, menuItemData];
        });

        try {
            const response = await apiOrderSubmit(body);
            const data = await response.json();
            const status = response.status;

            if (status === 200) {
                setNotifyMessage("Gracias. El pedido ha sido enviado correctamente.")
                setOrderSubmitted(true);
                console.log(data);
                /* setActiveOrder(data); */
                /* actions.restartOrderItems(); */
            }
            else {
                console.error(status);
                setNotifyMessage("Error interno del servidor.");
            }
        }
        catch (err) {
            console.error(err);
            setNotifyMessage("Error interno del servidor.");
        }
        finally {
            setLoading(false);
        }
    }

    const handleCloseOrder = () => {
        console.log("zerramoh");
    }

    return loading
        ? <Spinner />
        : (
            <div className="d-flex flex-column gap-2 mt-4">
                {loading ? <Spinner /> : null}

                <p className={`${orderSubmitted ? "text-success" : "text-danger"} ${!setNotifyMessage ? "d-none" : ""}`}>{notifyMessage}</p>

                <button
                    type="button"
                    title="Añadir estos elementos al pedido actual"
                    className="btn outline-theme-color-button shadow-none"
                    onClick={handleSendOrder}
                    disabled={Object.keys(orderItems).length === 0 ? true : false}
                >
                    {
                        Object.keys(activeOrder).length === 0 ? "ENVIAR PEDIDO" : "ACTUALIZAR PEDIDO"
                    }
                </button>

                <button
                    type="button"
                    title="Finalizar el pedido actual"
                    className="btn theme-color-button fw-bold shadow-sm"
                    onClick={handleCloseOrder}
                >
                    FINALIZAR
                </button>
            </div>
        );
};
