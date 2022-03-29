import React, { useState } from "react";

// Styles
import "./stripe-payments.css";

// Components
import { Spinner } from "../../Spinner/Spinner.jsx";
import { ErrorModal } from "../../Modal/ErrorModal/ErrorModal.jsx";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51KiZb0EI8OE1SU1FOiYOYkw7Uu0IGpMijb4dGk1gPgKmRq9mdNmfNo1PdCTKheV8xCkPjzAv9NwrGWApigcpeCDn00dqnYdhJn");

const CheckoutPaymentForm = () => {
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
            setLoading(true);

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            });

            if (!error) {                
                const { id } = paymentMethod; // Transaction ID

                /* try {
                    const { data } = await fetch("http://localhost:3001/api/checkout", {
                        method: "POST",
                        body: {
                            id,
                            amount: 10000, // cents
                        }
                    });

                    console.log(data);

                    //elements.getElement(CardElement).clear();
                }
                catch (error) {
                    console.log(error);
                    notify("error");
                }
                finally {
                    setLoading(false);
                } */
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

    return loading
        ? <Spinner />
        : (
            <div>
                <p className="m-0">Se va a efectuar un pago de:</p>

                <form id="payment-submit-form" onSubmit={handleSubmitPayment}>
                    <div className="total-detail"><h5 className="m-0 fw-bold">100 €</h5></div>

                    <p>Introduce los datos de tu tarjeta:</p>

                    <div className="card-element-input">
                        <CardElement className="form-control" />
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
