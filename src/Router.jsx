import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</>
	);
};

export default Router;
