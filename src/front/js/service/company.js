import { BASE_URL } from "./index";

// Company register
export const apiCompanyRegister = (companyCredentials) =>
    fetch(`${BASE_URL}/api/company/register`, {
        method: "POST",
        body: JSON.stringify(companyCredentials)
    });

// Get company data
export const apiCompanyGetData = () =>
    fetch(`${BASE_URL}/api/company/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });

// Company update
export const apiUpdateCompany = (body) =>
    fetch(`${BASE_URL}/api/company/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        },
        body: body
    });