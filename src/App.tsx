

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import './App.css';

import InvertionView from './pages/invertion';
import FonsetView from './pages/fonset';
import CooperationView from './pages/cooperation';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/invertion" element={<InvertionView />} />
			<Route path="/fonset" element={<FonsetView />} />
			<Route path="/cooperation" element={<CooperationView />} />
		</Route>
	)
);

function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App;