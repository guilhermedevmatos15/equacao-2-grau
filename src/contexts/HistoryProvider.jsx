import { createContext, useEffect, useState } from 'react';

const HistoryContext = createContext();

const KEY_LOCAL_STORAGE = 'history';

const HistoryProvider = ({ children }) => {
	const [history, setHistory] = useState();

	useEffect(() => {
		const dataLocal =
			JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) || [];

		if (!dataLocal?.length) setHistory([...dataLocal]);
		else setHistory([]);
	}, []);

	useEffect(() => {
		localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(history));
	}, [history]);

	return (
		<HistoryContext.Provider value={{ history, setHistory }}>
			{children}
		</HistoryContext.Provider>
	);
};

export default HistoryProvider;
