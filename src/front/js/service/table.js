import { BASE_URL } from "./index";

// Get table information
export const apiGetTable = (tableID) =>
    fetch(`${BASE_URL}/api/table/...`, {
        method: "POST",
        body: JSON.stringify(tableID)
    });
