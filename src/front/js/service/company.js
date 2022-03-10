import { BASE_URL } from "./index";

// Company Register
export const apiCompanyRegister = (companyCredentials) =>
    fetch(`${BASE_URL}/api/company/register`, {
        method: "POST",
        body: JSON.stringify(companyCredentials)
    });

export const apiCompanyGetData = () =>
    fetch(`${BASE_URL}/api/company/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });