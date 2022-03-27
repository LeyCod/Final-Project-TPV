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

  const getActiveOrdersTables = async () => {    
    try {
      setLoading(true);

      const responseTable = await apiGetTables();
      const dataTable = await responseTable.json();
      const statusTable = responseTable.status;

      const responseOrder = await apiGetActiveOrders(store.loggedUserCompanyData.id);
      const dataOrder = await responseOrder.json();
      const statusOrder = responseOrder.status;      

      if (statusOrder === 200 && statusTable === 200) {
        actions.setCompanyOrders(dataOrder);
        actions.setCompanyTables(dataTable);
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
    getActiveOrdersTables();
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

      const response = await apiGetMenuItems(store.companyID);
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

export const useFetchTableOrder = (fetch) => {
  const { store, actions } = useContext(Context);

  const [fetchActiveOrder, setFetchActiveOrder] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getActiveOrder = async () => {
    try {
      setLoading(true);

      const response = await apiGetActiveOrder(store.activeTable.id);
      const data = await response.json();
      const status = response.status;

      if (status === 200) {
        actions.setCreatedOrders(data);
        setFetchActiveOrder(true);
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
  }, [fetch]);

  return { fetchActiveOrder, error, loading }
}

export const useFetchClients = (table_id) => {
  const { store, actions } = useContext(Context);

  const [fetchResult, setFetchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getClientInfo = async () => {    
    try {
      setLoading(true);

      const responseTable = await apiGetTable(table_id);
      const dataTable = await responseTable.json();
      const statusTable = responseTable.status;

      if (statusTable === 200) {
        actions.setActiveTable("", table_id);
        actions.setCompanyID(dataTable.company_id);
        actions.setClientInfo(dataTable);
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
    getClientInfo();
  }, [table_id]);

  return { fetchResult, error, loading }
}
