import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "react-toastify/dist/ReactToastify.css";

// Functions
import { apiOrderSubmit } from "../../../service/order";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ToastContainer, toast, Flip } from "react-toastify";

export const SubmitOrderButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;

    const [loading, setLoading] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState(false);

    const notify = () => {
        toast("Pedido realizado correctamente", {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            type: "success"
        });
    }

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
                actions.restartStoredOrders();
                actions.setActiveTable(store.activeTable.name, store.activeTable.id);
                notify();
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
                <ToastContainer transition={Flip} />

                <p className={`fw-normal text-danger ${!setNotifyMessage ? "d-none" : ""}`}>{notifyMessage}</p>

                {
                    Object.keys(orderItems).length !== 0
                        ? <button
                            type="button"
                            title="Añadir estos elementos al pedido actual"
                            className="btn outline-theme-color-button shadow-none"
                            onClick={handleSendOrder}
                            disabled={Object.keys(orderItems).length === 0 ? true : false}
                        >
                            {
                                Object.keys(store.activeTableOrder).length === 0 ? "ENVIAR PEDIDO" : "ACTUALIZAR PEDIDO"
                            }
                        </button>
                        : null
                }

                {Object.keys(store.activeTableOrder).length !== 0 || Object.keys(orderItems).length !== 0
                    ? <button
                        type="button"
                        title="Finalizar el pedido actual"
                        className="btn theme-color-button fw-bold shadow-sm"
                        onClick={handleCloseOrder}
                    >
                        FINALIZAR Y PAGAR
                    </button>
                    : null
                }
            </div>
        );
};
