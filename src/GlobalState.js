import React, { createContext, useEffect } from 'react';
// import axios from 'axios';
import FormApi from 'networks/FormApi';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
	useEffect(() => {
		const getToken = localStorage.getItem('token');
		if (getToken) {
			const refreshToken = async () => {
				// const res = await axios.get('/users/refresh_token');
			};
			refreshToken();
		}
	}, []);

	const state = {
		formApi: FormApi(),
	};
	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
