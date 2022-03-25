import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Functions 
import { apiUserValidation } from "../../service/user";
import { apiCompanyGetData } from "../../service/company";

export const useFetchUser = () => {
  const { store, actions } = useContext(Context);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /* Validating user and getting data */
  const userValidation = async () => {
    try {
      setLoading(true);

      const responseUser = await apiUserValidation();
      const dataUser = await responseUser.json();
      const statusUser = responseUser.status;

      const responseCompany = await apiCompanyGetData();
      const dataCompany = await responseCompany.json();
      const statusCompany = responseCompany.status;

      if (statusUser === 200 && statusCompany === 200) {
        actions.setLoggedUserData(dataUser); // Save user data in the store
        actions.setLoggedUserCompanyData(dataCompany); // Save company data in the store
        setData(true);
      }
      else {
        setError(true);
      }
    }
    catch (err) {
      console.error(err);
      setError(true);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    userValidation();
  }, []);

  return { data, error, loading }
}
