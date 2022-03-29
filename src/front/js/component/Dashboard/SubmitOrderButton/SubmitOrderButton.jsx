import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Styles
import "react-toastify/dist/ReactToastify.css";

// Functions
import { apiOrderSubmit } from "../../../service/order";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { toast } from "react-toastify";

export const SubmitOrderButton = () => {
    const { store, actions } = useContext(Context);

    const orderItems = store.storedOrders[store.activeTable.id].items;

    const [loading, setLoading] = useState(false);    

    const notify = (result) => {
        const text = result === "success" ? "Pedido realizado correctamente" : "Ha ocurrido un error";

        toast(text, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
            theme: "colored",
            type: result
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
                notify("success");
            }
            else {
                console.error(status);
                notify("error");
            }
        }
        catch (err) {
            console.error(err);
            notify("error");
        }
        finally {
            setLoading(false);
        }
    }

    return loading
        ? <Spinner />
        : (
            <div className="d-flex flex-column gap-2">
                {loading ? <Spinner /> : null}                

                {
                    Object.keys(orderItems).length !== 0
                        ? <button
                            type="button"
                            title="Añadir estos elementos al pedido actual"
                            className="btn outline-theme-color-button shadow-none"
                            onClick={handleSendOrder}
                            disabled={Object.keys(orderItems).length === 0 ? true : false}
                            data-bs-dismiss="modal"
                        >
                            {
                                Object.keys(store.activeTableOrder).length === 0 ? "CREAR PEDIDO" : "ACTUALIZAR PEDIDO"
                            }
                        </button>
                        : null
                }

                {Object.keys(store.activeTableOrder).length !== 0
                    ? <button
                        type="button"
                        title="Finalizar el pedido actual"
                        className="btn theme-color-button fw-bold shadow-sm"
                        data-bs-toggle="modal" 
                        data-bs-target="#PaymentMethodSelect"
                    >
                        FINALIZAR Y PAGAR
                    </button>
                    : null
                }
            </div>
        );
};
