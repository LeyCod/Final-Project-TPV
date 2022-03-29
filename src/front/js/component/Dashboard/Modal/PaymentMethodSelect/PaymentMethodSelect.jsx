import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";

// Styles
import "./payment-method-select.css";

// Functions
import { apiOrderClose } from "../../../../service/order";

// Components
import { Spinner } from "../../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../../Modal/ErrorModal/ErrorModal.jsx";
import { toast } from "react-toastify";

// Custom Hooks
import { useFetchPaymentMethods } from "../../../CustomHooks/CustomHooks.jsx";

export const PaymentMethodSelect = () => {
    const { store, actions } = useContext(Context);

    /* Fetch payment methods */
    const { fetchResult, error, loading } = useFetchPaymentMethods(store.activeTable);
    
    const [paymentLoading, setPaymentLoading] = useState(false);

    const notify = (result) => {
        const text = result === "success" ? "Pedido finalizado correctamente" : "Ha ocurrido un error";

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

    const paymentMethodIcons = {
        1: <i className="fas fa-coins fa-lg"></i>,
        2: <i className="far fa-credit-card fa-lg"></i>,
        3: <i className="fas fa-wallet fa-lg"></i>,
        4: <i className="fab fa-paypal fa-lg"></i>
    }

    const handleCloseOrder = async (selectedMethod) => {
        console.log(selectedMethod);

        setPaymentLoading(true);

        let body = {
            "id": store.activeTableOrder.order_id,
            "payment_method_id": selectedMethod,
            "is_active": false
        }

        try {
            const response = await apiOrderClose(body);
            const data = await response.json();
            const status = response.status;

            if (status === 201) {
                console.log("perfe mira!");
                /* actions.restartStoredOrders();
                actions.setActiveTable(store.activeTable.name, store.activeTable.id); */
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
            setPaymentLoading(false);
        }
    }

    return loading || paymentLoading || store.paymentMethods === null
        ? <Spinner />
        : error
            ? <ErrorModal show={true} />
            : (
                <div className="modal fade" id="PaymentMethodSelect">
                    <div className="modal-dialog" id="payment-method-select">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Seleccionar método de pago</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    {
                                        Object.keys(store.paymentMethods).map(objKey =>
                                            <div
                                                key={objKey}
                                                className="payment-method-option"
                                                onClick={() => handleCloseOrder(objKey)}
                                            >
                                                <button
                                                    type="button"
                                                    className="px-4 btn btn-sm text-capitalize shadow-sm"
                                                >
                                                    {store.paymentMethods[objKey].name}
                                                    {paymentMethodIcons[objKey]}
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
};
