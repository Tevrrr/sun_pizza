/** @format */

import React from 'react';
import Button from './Button'
export default function Card({ url, title, ingredients, availability, price }) {
	return (
		<div className=' overflow-x-hidden rounded-md max-w-xs'>
			<img className=' w-full' src={url} alt={title} />
			<h1 className=' font-bold text-xl'>{title}</h1>
			<p className=' py-2'>{ingredients}</p>
			{availability ? (
				<div className=' flex items-center justify-between'>
					<h2 className='  font-bold text-xl'>{price}</h2>
					<Button>Добавить</Button>
				</div>
			) : (
				<h3>Будет позже</h3>
			)}
		</div>
	);
}
