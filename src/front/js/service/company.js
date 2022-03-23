import { BASE_URL } from "./index";

// Company Register
export const apiCompanyRegister = (companyCredentials) =>
    fetch(`${BASE_URL}/api/company/register`, {
        method: "POST",
        body: JSON.stringify(companyCredentials)
    });

// Get Company data
export const apiCompanyGetData = () =>
    fetch(`${BASE_URL}/api/company/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });

// Company Update
export const apiUpdateCompany = (body) =>
    fetch(`${BASE_URL}/api/company/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        },
        body: body
    });