import { BASE_URL } from "./index";

// User Login
export const apiUserLogin = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

// Register User
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
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token"),
        }
    });

// User Logout
export const apiUserLogout = () => localStorage.removeItem("api-flask-token");
