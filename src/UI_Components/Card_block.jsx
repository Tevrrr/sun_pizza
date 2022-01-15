/** @format */

import React from 'react';
import Card from './Items/Card';

export default function Card_block({ items }) {
	return (
		<div className=' flex flex-wrap sm:justify-start justify-center py-2 gap-4 my-4'>
			{items.map((item) => {
				return (
					<Card
						url={item.url}
						title={item.title}
						ingredients={item.ingredients}
						availability={item.availability}
						price={item.price}
					/>
				);
			})}
			{/* <Card
				url={
					'https://dodopizza-a.akamaihd.net/static/Img/Products/e9624d2bf1ae41598cd6635c0d3ed0f6_292x292.jpeg'
				}
				title={'Пепперони фреш'}
				ingredients={
					'Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус'
				}
				availability={true}
				price={250}
			/> */}
		</div>
	);
}
