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
			// #endregion company data

			// #region tables
			companyTables: {},
			companyAvailableTables: null,
			activeTableEdition: false,
			// #endregion tables

			// #region menu items
			menuItems: {},
			activeItemEdition: false,
			// #endregion menu items

			// #region orders	
			companyOrders: {},
			storedOrders: {},
			activeTable: null,
			activeTableOrder: {},
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
			// #endregion company data

			// #region tables
			setCompanyTables: (data) => {
				setStore({ ...getStore(), companyTables: data, companyAvailableTables: Object.keys(data).length - getStore().companyOrders.length });
			},
			setActiveTableEdition: (value) => {
				setStore({ ...getStore(), activeTableEdition: value });
			},
			// #endregion tables

			// #region menu items
			setMenuItems: (data) => {
				setStore({ ...getStore(), menuItems: data });
			},
			setActiveItemEdition: (value) => {
				setStore({ ...getStore(), activeItemEdition: value });
			},
			// #endregion menu items

			// #region orders
			setCompanyOrders: (data) => {
				setStore({ ...getStore(), companyOrders: data });
			},
			setActiveTable: (name, id) => {
				const store = getStore();
				store.activeTable = {
					name: name,
					id: id
				};

				if (!store.storedOrders.hasOwnProperty(id)) {
					store.storedOrders[id] = {
						items: {},
						totalPrice: 0
					}
				}

				setStore(store);
			},
			addOrderItem: (itemID, add) => { // add = true -> Add an item; add = false -> Remove an item
				const store = getStore();

				const orderItems = store.storedOrders[store.activeTable.id].items;
				const itemCounter = orderItems[itemID];

				itemCounter === undefined
					? orderItems[itemID] = 1
					: orderItems[itemID] = add ? itemCounter + 1 : itemCounter - 1;

				if (orderItems[itemID] === 0) { // Delete item in case of 0
					delete orderItems[itemID];
				}

				setStore(store);
				getActions().setTotalPrice();
			},
			setTotalPrice: () => {
				const store = getStore();

				const orderItems = store.storedOrders[store.activeTable.id].items;
				let total = 0;

				Object.keys(orderItems).forEach(itemIndex => {
					const item_count = orderItems[itemIndex];
					const item_total_price = item_count * store.menuItems[itemIndex].price;

					total += item_total_price;
				});

				store.storedOrders[store.activeTable.id].totalPrice = Math.floor(total * 100) / 100;
				setStore(store);
			},
			setActiveTableOrder: (data) => {
				setStore({ ...getStore(), activeTableOrder: data });
			},
			restartStoredOrders: () => {
				const store = getStore();
				store.storedOrders[store.activeTable.id].items = {};
				store.storedOrders[store.activeTable.id].totalPrice = 0;

				setStore(store);
			},
			// #endregion orders

			// #region clients
			setClientInfo: (companyData) => {
				const store = getStore();
				store.clientInfo.company = companyData;

				setStore(store);
			}
			// #endregion clients
		}
	};
};

export default getState;
