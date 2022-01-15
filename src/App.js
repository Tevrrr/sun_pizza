/** @format */

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './output.css';
import Navbar from './UI_Components/Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import NotFoundPage from './pages/NotFoundPage';
import Cart from './pages/Cart';


function App() {
	return (
		<div className='App min-h-screen'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/Contacts'
					element={<Contacts city={'Москва'} />}
				/>
				<Route path='/AboutUs' element={<AboutUs />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
