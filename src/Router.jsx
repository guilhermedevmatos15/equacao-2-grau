import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import History from './pages/History/History';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/history' element={<History />}></Route>
			</Routes>
		</>
	);
};

export default Router;
