import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import PropTypes from "prop-types";

// Styles
import "./stripe-payments.css";

// Service
import { BASE_URL } from "../../../service/index";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51KiZb0EI8OE1SU1FOiYOYkw7Uu0IGpMijb4dGk1gPgKmRq9mdNmfNo1PdCTKheV8xCkPjzAv9NwrGWApigcpeCDn00dqnYdhJn");

let showHideFunction;
let showHideFunction2;

const CheckoutPaymentForm = () => {
    const { store, actions } = useContext(Context);

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const notify = (result) => {
        const text = result === "success" ? "Pago realizado correctamente" : "Ha ocurrido un error";

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

    const handleSubmitPayment = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            });            

            if (!error) {
                const { id } = paymentMethod; // Transaction ID

                try {
                    const body = {
                        id: store.activeTableOrder.order_id,
                        id_payment: id,
                        amount: store.activeTableOrder.totalPrice * 100,
                        description: "Pago del pedido con ID " + store.activeTableOrder.order_id
                    };

                    const { data } = await fetch(`${BASE_URL}/api/stripe/payment/card/`, {
                        method: "POST",
                        body: JSON.stringify(body)
                    });

                    actions.restartStoredOrders();
                    actions.setActiveTableOrder({});
                    notify("success");
                    showHideFunction(false);                    
                    showHideFunction2(false);
                }
                catch (error) {
                    console.log(error);
                    notify("error");
                }
                finally {
                    setLoading(false);
                }
            }
            else {
                console.log("error", error);
                notify("error");
            }
        }
        catch (error) {
            console.log(error);
            notify("error");
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <p className="m-0">Se va a efectuar un pago de:</p>

            <form id="payment-submit-form" onSubmit={handleSubmitPayment}>
                <div className="total-detail"><h5 className="m-0 fw-bold">{Math.floor(store.activeTableOrder.totalPrice * 100) / 100} €</h5></div>

                <p className="mb-1">Introduce los datos de tu tarjeta:</p>

                <div className="card-element-input">
                    <CardElement className="form-control" />
                </div>

                <div className="d-grid">
                    <button disabled={!stripe} className="btn green-button text-center shadow-none">
                        PAGAR
                    </button>

                    {loading ? <Spinner /> : null}
                </div>
            </form>
        </div>
    );
};

export const StripePayments = (props) => {
    showHideFunction = props.setShowStripePayments;
    showHideFunction2 = props.setShowPaymentMethods;

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPaymentForm />
        </Elements>
    );
}

StripePayments.propTypes = {
    setShowStripePayments: PropTypes.func,
    setShowPaymentMethods: PropTypes.func
}