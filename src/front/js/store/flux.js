const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Company and user registration
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
			
			// Logged user data
			loggedUserData: {},
			loggedUserCompanyData: {},
			
			// Dashboard theme color
			dashBoardThemeColors: ["orange", "yellow", "red", "green"],
			selectedDashboardThemeColor: 0,
			
			// Menu items by company
			menuItems: {},

			// Items (item id and quantity) that haven't been registerd in the order yet and total price of them
			orderItems: {},
			totalPrice: 0,

			// Active order data
			activeOrder: {}, 

			// Active order table id
			activeOrderTableID: ""
		},
		actions: {
			// Company and user registration
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

			// Logged user data
			setLoggedUserData: (userData) => {
				const store = getStore();
				store.loggedUserData = userData;

				setStore(store);				
			},
			setLoggedUserCompanyData: (companyData) => {
				const store = getStore();
				store.loggedUserCompanyData = companyData;

				setStore(store);
			},

			// Dashboard theme color
			changeDashboardThemeColor: () => {
				const nextIndex = getStore().selectedDashboardThemeColor + 1;
				setStore({ ...getStore(), selectedDashboardThemeColor: !getStore().dashBoardThemeColors[nextIndex] ? 0 : nextIndex });
				localStorage.setItem("dashboard-theme-color", getStore().selectedDashboardThemeColor);
			},

			// Menu items by company
			setMenuItems: (menuItems) => {
				getStore().menuItems = menuItems;
			},

			// Items (item id and quantity) that haven't been registerd in the order yet and total price of them
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
			},

			// Active order data
			setActiveOrder: (orderData) => {
				setStore({ ...getStore(), activeOrder: orderData });
			},

			// Active order table id
			setActiveOrderTableID: (tableID) => {
				getStore().activeOrderTableID =  tableID;
			},
			
			// Reset items, quantity and total price after the order register
			restartOrderItems: () => {
				const store = getStore();
				store.orderItems = {};
				store.totalPrice = 0;

				setStore(store);
			}			
		}
	};
};

export default getState;
