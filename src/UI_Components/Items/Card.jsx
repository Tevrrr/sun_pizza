/** @format */

import React, { useState } from 'react';
import Button from './Button';
export default function Card({
	url,
	title,
	ingredients,
	availability,
	price,
	addItemCart,
	Added,
}) {
	return (
		<div className=' flex flex-col overflow-x-hidden rounded-md lg:w-[23%] md:w-[31%] sm:w-[48%] w-[350px] my-4'>
			<img
                className=' hover:translate-y-1 transition-all w-full'
				src={url}
				alt={title}
			/>
			<h1 className=' font-bold text-xl'>{title}</h1>
			<p className=' grow py-2'>{ingredients}</p>
			{availability ? (
				<div className=' flex items-center justify-between'>
					<h2 className='  font-bold text-xl'>{price} ₽</h2>
					<Button onClick={() => addItemCart(title)}>Добавить</Button>
				</div>
			) : (
				<div className=' flex justify-end'>
					<h3 className=' text-right text-lg font-extrabold text-orange-600 border-2 border-orange-600 mr-2 p-2'>
						Будет позже!
					</h3>
				</div>
			)}
		</div>
	);
}
