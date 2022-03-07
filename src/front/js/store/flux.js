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
				name: "",
				email: "",
				password: "",
				is_admin: false			
			}
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
			}
		}
	};
};

export default getState;
