import { BASE_URL } from "./index";

// User Login
export const apiUserLogin = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

// User Register
export const apiUserRegister = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

// User Validation
export const apiUserValidation = () =>
    fetch(`${BASE_URL}/api/user/validate`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });

// User Update
export const apiUpdateUser = (body) =>
    fetch(`${BASE_URL}/api/user/update`, {
        method: "PUT",
        body: body
    });

// User Logout
export const apiUserLogout = () => localStorage.removeItem("api-flask-token");

// Upload img
export const apiUploadImage = (body) =>
    fetch(`${BASE_URL}/api/user/img`, {
        method: "POST",
        body: body
    });
