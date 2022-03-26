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

    export const apiManageTable = (new_item, body) => {
        const fetchUrl = new_item ? `${BASE_URL}/api/table/register` : `${BASE_URL}/api/table/update`;
        const fetchMethod = new_item ? "POST" : "PUT";
    
        return fetch(fetchUrl, {
            method: fetchMethod,
            body: body,
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
            }
        });
    }

    export const apiDeleteTables= (body) =>
    fetch(`${BASE_URL}/api/table/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        },
        body: JSON.stringify(body)
    });


