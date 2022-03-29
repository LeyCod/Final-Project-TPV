import { BASE_URL } from "./index";

// Get company active orders
export const apiGetActiveOrders = (company_id) => fetch(`${BASE_URL}/api/order/all/${company_id}`);

// Submit order
export const apiOrderSubmit = (orderData) =>
    fetch(`${BASE_URL}/api/order/register`, {
        method: "POST",
        body: JSON.stringify(orderData)
    });

// Get active order by table_id
export const apiGetActiveOrder = (table_id) => fetch(`${BASE_URL}/api/order/table/${table_id}`);

// Close order
export const apiOrderClose = (closeData) =>
    fetch(`${BASE_URL}/api/order/update`, {
        method: "POST",
        body: JSON.stringify(closeData)
    });
