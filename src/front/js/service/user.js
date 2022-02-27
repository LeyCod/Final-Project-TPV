import { BASE_URL } from "./index";

// Login User
export const ApiUserLogin = (userCredentials) =>
    fetch(`${BASE_URL}/api/user/login`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });

