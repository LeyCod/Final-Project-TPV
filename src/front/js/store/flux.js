const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// #region user register
			companyRegisterData: {
				name: "",
				cif: ""
			},
			userRegisterData: {
				company_id: "",
				nif: "",
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				is_admin: false
			},
			companyRegistered: false,
			// #endregion user register

			// #region user data
			loggedUserData: {},
			loggedUserCompanyData: {},
			dashBoardThemeColors: ["orange", "yellow", "red", "green"],
			selectedDashboardThemeColor: 0,
			// #endregion user data

			// #region company data
			companyID: null,
			companyOrders: {},
			companyTables: {},
			companyAvailableTables: null,
			// #endregion company data

			// #region menu items
			menuItems: {},
			activeItemEdition: false,
			// #endregion menu items

			// #region orders
			// ID and quantity of menu items that haven't been registered in a order yet, the ID of the assigned table and the total price of them
			orderItems: {},
			orderItemsTableID: null,
			totalPrice: 0,
			// #endregion orders

			// #region clients
			clientInfo: {
				company: null,
				order: null
			}
			// #endregion clients
		},
		actions: {
			// #region user register
			checkCompanyRegisterData: () => {
				const store = getStore();

				return store.companyRegisterData.name.length !== 0 && store.companyRegisterData.cif.length !== 0
					? true
					: false;
			},
			setCompanyRegisterData: (input, value) => {
				getStore().companyRegisterData[[input]] = value;
			},
			setRegisteredCompanyID: (new_company_id) => {
				getStore().userRegisterData.company_id = new_company_id;
				getStore().userRegisterData.is_admin = true;
			},
			setUserRegisterData: (input, value) => {
				getStore().userRegisterData[[input]] = value;
			},
			setCompanyRegistered: () => {
				getStore().companyRegistered = true;
			},
			// #endregion user register

			// #region user data
			setLoggedUserData: (userData) => {
				setStore({ ...getStore(), loggedUserData: userData });
			},
			setLoggedUserCompanyData: (companyData) => {
				setStore({ ...getStore(), loggedUserCompanyData: companyData });
				getActions().setCompanyID(companyData.id);
			},
			changeDashboardThemeColor: () => {
				const nextIndex = getStore().selectedDashboardThemeColor + 1;
				setStore({ ...getStore(), selectedDashboardThemeColor: !getStore().dashBoardThemeColors[nextIndex] ? 0 : nextIndex });
				localStorage.setItem("dashboard-theme-color", getStore().selectedDashboardThemeColor);
			},
			// #endregion user data

			// #region company data
			setCompanyID: (id) => {
				setStore({ ...getStore(), companyID: id });
			},
			setCompanyOrders: (data) => {
				setStore({ ...getStore(), companyOrders: data });
			},
			setCompanyTables: (data) => {
				setStore({ ...getStore(), companyTables: data, companyAvailableTables: data.length - getStore().companyOrders.length });				
			},
			// #endregion company data

			// #region menu items
			setMenuItems: (data) => {
				setStore({ ...getStore(), menuItems: data });
			},
			setActiveItemEdition: (value) => {
				setStore({ ...getStore(), activeItemEdition: value });
			},
			// #endregion menu items

			// #region orders
			setOrderItemsTableID: (id) => {
				setStore({ ...getStore(), orderItemsTableID: id });				
			},
			// #endregion orders

			// #region clients
			setClientInfo: (companyData) => {
				const store = getStore();
				store.clientInfo.company = companyData;

				setStore(store);
				console.log(getStore());
			}
			// #endregion clients
		}
	};
};

export default getState;
