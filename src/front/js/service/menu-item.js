import { BASE_URL } from "./index";

// Get all menu items
export const apiGetMenuItems = (companyID) =>
    fetch(`${BASE_URL}/api/menu_item/${companyID}`);

// Register / Update menu item
export const apiManageItem = (new_item, body) => {
    const fetchUrl = new_item ? `${BASE_URL}/api/menu_item/register` : `${BASE_URL}/api/menu_item/update`;
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

// Delete menu item
export const apiDeleteItem = (body) =>
    fetch(`${BASE_URL}/api/menu_item/delete`, {
        method: "DELETE",
        body: body,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("api-flask-token")
        }
    });
