import HistoryProvider from './HistoryProvider';

const GlobalProvider = ({ children }) => {
	return <HistoryProvider>{children}</HistoryProvider>;
};

export default GlobalProvider;
