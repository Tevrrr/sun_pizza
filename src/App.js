/** @format */

import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './output.css';
import Navbar from './UI_Components/Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import NotFoundPage from './pages/NotFoundPage';
import Cart from './pages/Cart';


function App() {
    const [menu, setMenu] = useState([
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg',
			title: 'Пепперони фреш',
			ingredients:
				'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
			availability: true,
			price: 250,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
			title: 'Sun Микс',
			ingredients:
				'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
			availability: true,
			price: 545,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
			title: 'Гавайская',
			ingredients: 'Ветчина, ананасы, моцарелла, томатный соус',
			availability: true,
			price: 435,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c7a83e078b44156a7ad774389ed7713_292x292.jpeg',
			title: 'Диабло',
			ingredients:
				'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
			availability: true,
			price: 495,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0665a05313b1431588acec0ecfac0888_292x292.jpeg',
			title: 'Цыпленок ранч',
			ingredients:
				'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
			availability: false,
			price: 495,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg',
			title: 'Пепперони фреш',
			ingredients:
				'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус',
			availability: true,
			price: 250,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
			title: 'Sun Микс',
			ingredients:
				'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
			availability: true,
			price: 545,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
			title: 'Гавайская',
			ingredients: 'Ветчина, ананасы, моцарелла, томатный соус',
			availability: false,
			price: 435,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/2c7a83e078b44156a7ad774389ed7713_292x292.jpeg',
			title: 'Диабло',
			ingredients:
				'Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, томатный соус',
			availability: true,
			price: 495,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/0665a05313b1431588acec0ecfac0888_292x292.jpeg',
			title: 'Цыпленок ранч',
			ingredients:
				'Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок',
			availability: true,
			price: 495,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
			title: 'Додо Микс',
			ingredients:
				'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
			availability: true,
			price: 545,
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
			title: 'Гавайская',
			ingredients: 'Ветчина, ананасы, моцарелла, томатный соус',
			availability: false,
			price: 435,
		},
	]);
	return (
		<div className='App min-h-screen'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home menu={menu} />} />
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
