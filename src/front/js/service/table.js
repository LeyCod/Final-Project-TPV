import { BASE_URL } from "./index";

// Get table information
export const apiGetTable = (tableID) => 
    fetch(`${BASE_URL}/api/table/${tableID}`);

    export const apiGetTables= () =>
    fetch(`${BASE_URL}/api/table/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });


