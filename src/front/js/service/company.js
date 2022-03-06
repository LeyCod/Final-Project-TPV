import { BASE_URL } from "./index";

// Company Register
export const apiCompanyRegister = (companyCredentials) =>
    fetch(`${BASE_URL}/api/company/register`, {
        method: "POST",
        body: JSON.stringify(companyCredentials)
    });