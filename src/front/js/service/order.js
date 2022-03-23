import { BASE_URL } from "./index";

// Submit Order
export const apiOrderSubmit = (orderData) =>
    fetch(`${BASE_URL}/api/order/register`, {
        method: "POST",
        body: JSON.stringify(orderData)
    });
