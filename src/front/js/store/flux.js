const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			company:{}
		},
		actions: {
			setCompany:(company)=>{
				const store = getStore()
				setStore({...store, company:company})
			}
		}
	};
};

export default getState;
