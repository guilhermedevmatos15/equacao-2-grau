import { BrowserRouter } from 'react-router-dom';

// styles
import './styles/main.css';

// router
import Router from './Router';

// contexts
import GlobalProvider from './contexts/GlobalProvider';

const App = () => {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</GlobalProvider>
	);
};

export default App;
