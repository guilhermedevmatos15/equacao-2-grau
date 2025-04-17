import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const Router = () => {
	return (
		<>
			<Routes>
				<Route index path='/' element={<Home />}></Route>
			</Routes>
		</>
	);
};

export default Router;
