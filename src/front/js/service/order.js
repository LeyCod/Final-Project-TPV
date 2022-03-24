import { BASE_URL } from "./index";

// Submit Order
export const apiOrderSubmit = (orderData) =>
    fetch(`${BASE_URL}/api/order/register`, {
        method: "POST",
        body: JSON.stringify(orderData)
    });

// Get Active Order
export const apiGetActiveOrder = (table_id) => fetch(`${BASE_URL}/api/order/table/${table_id}`);
