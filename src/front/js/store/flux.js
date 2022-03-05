const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			company:{},
			user:{}
		},
		actions: {
			setCompany:(company)=>{
				const store = getStore()
				setStore({...store, company:company})
			},
			setUser:(user)=>{
				const store = getStore()
				setStore({...store, user:user})
			}
		}
	};
};

export default getState;
