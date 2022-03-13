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
			selectedDashboardThemeColor: 0
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
			}
		}
	};
};

export default getState;
