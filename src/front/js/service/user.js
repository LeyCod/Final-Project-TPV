import { BASE_URL } from "./index";

// User login
export const apiUserLogin = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

// User register
export const apiUserRegister = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

// User validation
export const apiUserValidation = () =>
    fetch(`${BASE_URL}/api/user/validate`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });

// User update
export const apiUpdateUser = (body) =>
    fetch(`${BASE_URL}/api/user/update`, {
        method: "PUT",
        body: body
    });

// User logout
export const apiUserLogout = () => localStorage.removeItem("api-flask-token");

// Upload img
export const apiUploadImage = (body) =>
    fetch(`${BASE_URL}/api/user/img`, {
        method: "POST",
        body: body
    });
