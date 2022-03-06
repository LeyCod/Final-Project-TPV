const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			companyRegisterCredentials: {}
		},
		actions: {
			setCompanyRegisterCredentials: (companyCredentials) => {
				setStore({ companyRegisterCredentials: companyCredentials });
			},
		}
	};
};

export default getState;
