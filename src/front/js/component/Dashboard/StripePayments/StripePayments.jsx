import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

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

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            });

            console.log("paymentMethod", paymentMethod);

            setLoading(true);

            /* if (!error) {
                const { id } = paymentMethod; // Transaction ID

                try {
                    const body = {
                        id: store.activeTableOrder.order_id,
                        id_payment: id,
                        amount: store.activeTableOrder.totalPrice * 100
                    };

                    console.log("enviooo", body);

                    const { data } = await fetch(`${BASE_URL}/api/stripe/payment/card/`, {
                        method: "POST",
                        body: body
                    });

                    console.log(data);                   

                    elements.getElement(CardElement).clear();
                    notify("success");
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
            } */
        }
        catch (error) {
            console.log(error);
            notify("error");
        }
        finally {
            setLoading(false);
        }
    };

    return loading
        ? <Spinner />
        : (
            <div>
                <p className="m-0">Se va a efectuar un pago de:</p>

                <form id="payment-submit-form" onSubmit={handleSubmitPayment}>
                    <div className="total-detail"><h5 className="m-0 fw-bold">{store.activeTableOrder.totalPrice} €</h5></div>

                    <p className="mb-1">Introduce los datos de tu tarjeta:</p>

                    <div className="card-element-input">
                        <CardElement className="form-control" />
                    </div>

                    <div className="d-grid">
                        <button disabled={!stripe} className="btn green-button text-center shadow-none">
                            PAGAR
                        </button>
                    </div>                    
                </form>
            </div>
        );
};

export const StripePayments = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPaymentForm />
        </Elements>
    );
}
