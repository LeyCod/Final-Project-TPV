import { BASE_URL } from "./index";

// Get all menu items
export const apiGetMenuItems = (companyID) =>
    fetch(`${BASE_URL}/api/menu_item/${companyID}`, {
        method: "GET"
    });
