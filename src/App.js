/** @format */

import React, { useState } from 'react';
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
			tegs: ['Мясные', 'Все'],
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/ca0730a9b2d6457a899a41765555dc29_292x292.jpeg',
			title: 'Sun Микс',
			ingredients:
				'Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы',
			availability: true,
			price: 545,
			tegs: ['Мясные', 'Все'],
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/4749ca7de7e247daa69a685714f06aa3_292x292.jpeg',
			title: 'Гавайская',
			ingredients: 'Ветчина, ананасы, моцарелла, томатный соус',
			availability: false,
			price: 435,
			tegs: ['Мясные', 'Все'],
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1130292c8ffb4c34bb0a20619e65efb3_292x292.jpeg',
			title: 'Четыре сыра',
			ingredients:
				'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо',
			availability: true,
			price: 495,
			tegs: ['Вегетарианские', 'Все'],
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cf22475052d34b41b7f00792aa73dca4_292x292.jpeg',
			title: 'Овощи и грибы',
			ingredients:
				'Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы',
			availability: true,
			price: 495,
			tegs: ['Вегетарианские', 'Все'],
		},
		{
			url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/6b61691078454b3793cdbfbbaa15cf58_292x292.jpeg',
			title: 'Маргарита',
			ingredients: 'Томаты, итальянские травы, томатный соус',
			availability: true,
			price: 375,
			tegs: ['Веганские', 'Все'],
		},
	]);
    const [cart, setCart] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);
	function СountTotalPrice() {
		let i = 0;
		cart.map((item) => {
			i += item.price * item.number;
        });
		console.log(i);
        
		setTotalPrice(i);
	}
    function addItemCart(name) {
        if(cart.find((item) => {
			return item.title === name;
        })) {
            incrementNumber(name); 
            return;
        }
		let item = menu.find((item) => {
			return item.title === name;
        });
        
		setCart(
			cart.concat({ title: item.title, price: item.price, number: 1 })
        );
        setTotalPrice(TotalPrice + item.price);

	}
    function incrementNumber(name) {
		setCart(
			cart.map((item) => {
				if (item.title === name) item.number++;
				return item;
			})
        );
        СountTotalPrice();
	}
	function decrementNumber(name) {
		setCart(
			cart.map((item) => {
				if (item.title === name && item.number > 1) item.number--;
				return item;
			})
        );
        СountTotalPrice();
	}
	return (
		<div className='App min-h-screen'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							menu={menu}
							addItemCart={addItemCart}
							cart={cart}
						/>
					}
				/>
				<Route
					path='/Contacts'
					element={<Contacts city={'Москва'} />}
				/>
				<Route path='/AboutUs' element={<AboutUs />} />
				<Route
					path='/Cart'
					element={
						<Cart
							items={cart}
							incrementNumber={incrementNumber}
							decrementNumber={decrementNumber}
							TotalPrice={TotalPrice}
						/>
					}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
