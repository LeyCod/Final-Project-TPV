import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

// Functions
import { apiOrderSubmit } from "../../../service/order";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { OrderSubmittedModal } from "../Modal/OrderSubmittedModal/OrderSubmittedModal.jsx";

export const SubmitOrderButton = () => {
    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const [submittedOrder, setSubmittedOrder] = useState(false);

    const handleSendOrder = async () => {
        setLoading(true);
        setFetchError(false);

        let body = {
            "table_id": 7002,
            "company_id": 9003,
            "menu_items": []
        }

        Object.keys(store.orderItems).forEach(menuItemID => {
            let menuItemData = {
                "menu_item_id": store.menuItems[menuItemID].id,
                "price": store.menuItems[menuItemID].price,
                "quantity": store.orderItems[menuItemID]
            }

            body.menu_items = [...body.menu_items, menuItemData];
        });

        try {
            const response = await apiOrderSubmit(body);
            const data = await response.json();
            const status = response.status;

            console.log(data);
            console.log(status);

            if (status === 200) {
                setSubmittedOrder(true);
            }
            else {
                console.error(status);
                setFetchError(true);
            }
        }
        catch (err) {
            console.error(err);
            setFetchError(true);
        }
        finally {
            setLoading(false);
        }
    }

    const handleCloseOrder = () => {
        console.log("cierra mi rey");
    }

    return fetchError
        ? <ErrorModal />
        : (
            <div className="d-flex flex-column gap-2 mt-4">
                {loading ? <Spinner /> : null}
                {submittedOrder ? <OrderSubmittedModal /> : null}

                <button
                    type="button"
                    title="Añadir estos elementos al pedido actual"
                    className="btn outline-theme-color-button shadow-none"
                    onClick={handleSendOrder}
                    disabled={Object.keys(store.orderItems).length === 0 ? true : false}
                >
                    ENVIAR PEDIDO
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
