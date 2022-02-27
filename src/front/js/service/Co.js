import { BASE_URL } from "./index";

// Company Register
export const ApiCoLogin = (CoCredentials) =>
    fetch(`${BASE_URL}/api/Co/register`, {
        method: "POST",
        body: JSON.stringify(userCredentials)
    });


/**
*  TODO Revisar
*/