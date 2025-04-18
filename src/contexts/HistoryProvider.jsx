import { createContext, useEffect, useReducer } from 'react';

export const HistoryContext = createContext();

const KEY_LOCAL_STORAGE = 'history';

const HistoryProvider = ({ children }) => {
	function reducer(state, { type, payload }) {
		switch (type) {
			case 'SET_ALL_HISTORY':
				return payload;
			case 'RESET_HISTORY':
				return [];
			case 'ADD':
				return [...state, payload];
		}
	}

	const [history, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		const dataLocal =
			JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || [];

		if (dataLocal?.length)
			dispatch({ type: 'SET_ALL_HISTORY', payload: [...dataLocal] });
		else dispatch({ type: 'SET_ALL_HISTORY', payload: [] });
	}, []);

	useEffect(() => {
		localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(history));
	}, [history]);

	return (
		<HistoryContext.Provider value={{ history, dispatch }}>
			{children}
		</HistoryContext.Provider>
	);
};

export default HistoryProvider;
