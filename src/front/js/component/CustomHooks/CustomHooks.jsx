import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";

// Functions 
import { apiUserValidation } from "../../service/user";
import { apiCompanyGetData } from "../../service/company";
import { apiGetActiveOrders, apiGetActiveOrder } from "../../service/order";
import { apiGetTables, apiGetTable } from "../../service/table";
import { apiGetMenuItems } from "../../service/menu-item";

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

export const useFetchMenuItems = (fetch) => {
  const { store, actions } = useContext(Context);

  const [fetchMenuItemResult, setFetchMenuItemResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMenuItems = async () => {    
    try {
      setLoading(true);

      const response = await apiGetMenuItems(store.activeCompanyID);
      const data = await response.json();
      const status = response.status;

      if (status === 200) {
        actions.setMenuItems(data);
        setFetchMenuItemResult(true);
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
    getMenuItems();
  }, [fetch]);

  return { fetchMenuItemResult, error, loading }
}

export const useFetchTableOrder = (table_id) => {
  const { store, actions } = useContext(Context);

  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getActiveOrder = async () => {    
    try {
      setLoading(true);

      const responseTable = await apiGetTable(table_id);
      const dataTable = await responseTable.json();
      const statusTable = responseTable.status;

      const responseOrder = await apiGetActiveOrder(table_id);
      const dataOrder = await responseOrder.json();
      const statusOrder = responseOrder.status;

      if (statusTable === 200 && statusOrder === 200) {
        actions.setActiveCompanyID(dataTable.company_id);
        actions.setClientData(dataTable, dataOrder);
                
        //actions.setMenuItems(data);
        setFetchResult(true);
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
    getActiveOrder();
  }, [table_id]);

  return { fetchResult, error, loading }
}
