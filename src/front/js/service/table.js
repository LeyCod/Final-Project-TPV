import { BASE_URL } from "./index";

// Get table information
export const apiGetTable = (tableID) => 
    fetch(`${BASE_URL}/api/table/${tableID}`);
