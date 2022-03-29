import React, { useState } from "react";

// Components
import { loadStripe } from "@stripe/stripe-js";
import { Spinner } from "../../Spinner/Spinner.jsx";

export const CheckoutPaymentForm = () => {
    const stripePromise = loadStripe("pk_test_51KiZb0EI8OE1SU1FOiYOYkw7Uu0IGpMijb4dGk1gPgKmRq9mdNmfNo1PdCTKheV8xCkPjzAv9NwrGWApigcpeCDn00dqnYdhJn");

    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);

        if (!error) {
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
                notify("error");
            }
            setLoading(false);
        }
    };

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

    console.log("consolee", !stripe || loading);

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <h3 className="text-center my-2">100€</h3>

            <div className="form-group">
                <CardElement />
            </div>

            <button disabled={!stripe} className="btn btn-success">
                {loading ? (
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    "PAGAR"
                )}
            </button>
        </form>
    );
};
