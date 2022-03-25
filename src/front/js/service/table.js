import { BASE_URL } from "./index";

// Get tables information
export const apiGetTables = () =>
    fetch(`${BASE_URL}/api/table/`, {        
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });

// Get table information
export const apiGetTable = (tableID) =>
    fetch(`${BASE_URL}/api/table/${tableID}`);
