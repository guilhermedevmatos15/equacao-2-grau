import { BrowserRouter } from 'react-router-dom';

import './styles/main.css';

import Router from './Router';

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};

export default App;
