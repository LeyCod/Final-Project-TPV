import { BASE_URL } from "./index";

// Get payment methods
export const apiPaymentMethods = () =>
    fetch(`${BASE_URL}/api/payment_method/`);
