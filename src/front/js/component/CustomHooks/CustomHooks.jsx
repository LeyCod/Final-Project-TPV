import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Functions 
import { apiUserValidation } from "../../service/user";
import { apiCompanyGetData } from "../../service/company";
import { apiGetActiveOrders } from "../../service/order";
import { apiGetTables } from "../../service/table";

export const useFetchUser = (fetch) => {
  const { store, actions } = useContext(Context);

  const [validateUser, setValidateUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
        actions.setLoggedUserData(dataUser);
        actions.setLoggedUserCompanyData(dataCompany);
        setValidateUser(true);
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
  }, [fetch]);

  return { validateUser, error, loading }
}

export const useFetchOrdersTables = (fetch) => {
  const { store, actions } = useContext(Context);

  const [fetchOrderTableResult, setFetchOrderTableResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getActiveOrders = async () => {    
    try {
      setLoading(true);

      const responseOrder = await apiGetActiveOrders(store.loggedUserCompanyData.id);
      const dataOrder = await responseOrder.json();
      const statusOrder = responseOrder.status;

      const responseTable = await apiGetTables();
      const dataTable = await responseTable.json();
      const statusTable = responseTable.status;

      if (statusOrder === 200 && statusTable === 200) {
        actions.setCompanyActiveOrders(dataOrder);
        actions.setCompanyActiveTables(dataTable);
        setFetchOrderTableResult(true);
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
    getActiveOrders();
  }, [fetch]);

  return { fetchOrderTableResult, error, loading }
}
