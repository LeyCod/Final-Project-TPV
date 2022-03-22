const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			loggedUserData: {},
			loggedUserCompanyData: {},
			dashBoardThemeColors: ["orange", "yellow", "red", "green"],
			selectedDashboardThemeColor: 0,
			menuItems: {},
			orderItems: {},
			orderTable: {},
			totalPrice: 0
		},
		actions: {
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
			setLoggedUserData: (userData) => {
				getStore().loggedUserData = userData;
			},
			setLoggedUserCompanyData: (companyData) => {
				getStore().loggedUserCompanyData = companyData;
			},
			changeDashboardThemeColor: () => {
				const nextIndex = getStore().selectedDashboardThemeColor + 1;
				setStore({ ...getStore(), selectedDashboardThemeColor: !getStore().dashBoardThemeColors[nextIndex] ? 0 : nextIndex });
				localStorage.setItem("dashboard-theme-color", getStore().selectedDashboardThemeColor);
			},
			setMenuItems: (menuItems) => {
				getStore().menuItems = menuItems;
			},
			addOrderItem: (itemID, add) => { // add = true -> Add an item; add = false -> Remove an item
				const store = getStore();
				const itemCounter = store.orderItems[itemID];

				itemCounter === undefined
					? store.orderItems[itemID] = 1
					: store.orderItems[itemID] = add ? itemCounter + 1 : itemCounter - 1;

				if (store.orderItems[itemID] === 0) { // delete item in case of 0
					delete store.orderItems[itemID];
				}
				
				setStore({ ...store });
				getActions().setTotalPrice();
			},
			setOrderTable: (tableID) => {
				setStore({ ...getStore(), orderTable: tableID });				
			},
			setTotalPrice: () => {
				const store = getStore();
				let total = 0;

				Object.keys(store.orderItems).forEach(itemIndex => {
					const item_count = store.orderItems[itemIndex];
					const item_total_price = item_count * store.menuItems[itemIndex].price;

					total += item_total_price;
				});

				store.totalPrice = Math.floor(total * 100) / 100;
				setStore({ ...store });
			}
		}
	};
};

export default getState;
