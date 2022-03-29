import React, { useState } from "react";

// Styles
import "./stripe-payments.css";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51KiZb0EI8OE1SU1FOiYOYkw7Uu0IGpMijb4dGk1gPgKmRq9mdNmfNo1PdCTKheV8xCkPjzAv9NwrGWApigcpeCDn00dqnYdhJn");

const CheckoutPaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const handleSubmitPayment = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        setLoading(true);

        if (!error) {
            // console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post(
                    "http://localhost:3001/api/checkout",
                    {
                        id,
                        amount: 10000, //cents
                    }
                );
                console.log(data);

                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log("consolee", !stripe || loading);

    return loading
        ? <Spinner />
        : (
            <div>
                <p className="m-0">Introduce los datos de tu tarjeta:</p>

                <form id="payment-submit-form" onSubmit={handleSubmitPayment}>
                    <div className="total-detail"><h5 className="m-0 fw-bold">100 €</h5></div>

                    <div className="card-element-input shadow-sm">
                        <CardElement />
                    </div>

                    <div className="d-grid">
                        <button disabled={!stripe} className="btn green-button text-center">
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
