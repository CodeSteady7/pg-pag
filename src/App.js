import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Form from './layout/Form';
import Grafik from './layout/Grafik';
import Scan from './layout/Scan';
import Formulir from './layout/Formulir';
import Users from 'layout/Users';
// import { Chart as ChartJS, registerables } from 'chart.js';
// import { Chart } from 'react-chartjs-2';
// ChartJS.register(...registerables);

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Grafik />} />
				<Route path='/user' element={<Users />} />
				<Route path='/form' element={<Form />} />
				<Route path='/scan' element={<Scan />} />
				<Route path='/formulir/:id' element={<Formulir />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
