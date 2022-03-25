import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Functions 
import { apiUserValidation } from "../../service/user";
import { apiCompanyGetData } from "../../service/company";

export const useFetchUser = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState(null);

  /* Validating user and getting user data */
  const userValidation = async () => { console.log("Cargando datos de usuario...");
    try {
      const response = await apiUserValidation();
      const data = await response.json();
      const status = response.status;

      if (status === 200) {
        actions.setLoggedUserData(data); // Save user data in the store
        getUserCompanyData();
      }
      else {
        setUserData(false);
      }
    }
    catch (err) {
      console.error(err);
      setUserData(false);
    }
  }

  /* Get user company data */
  const getUserCompanyData = async () => {
    try {
      const response = await apiCompanyGetData();
      const data = await response.json();
      const status = response.status;

      if (status === 200) {
        actions.setLoggedUserCompanyData(data); // Save company data in the store
        setUserData(true);
      }
      else {
        setUserData(false);
      }
    }
    catch (err) {
      console.error(err);
      setUserData(false);
    }
  }

  useEffect(() => {
    userValidation();
  }, []);

  return userData;
}
