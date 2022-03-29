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

// Register / Update table
export const apiManageTable = (new_table, body) => {
    const fetchUrl = new_table ? `${BASE_URL}/api/table/register` : `${BASE_URL}/api/table/update`;
    const fetchMethod = new_table ? "POST" : "PUT";

    return fetch(fetchUrl, {
        method: fetchMethod,
        body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });
}
