/** @format */

import React from 'react';
import CartItem from '../UI_Components/Items/CartItem';

export default function Cart({ items, incrementNumber, decrementNumber, TotalPrice }) {
	return (
		<div className=' flex-col max-w-[1200px] mx-auto p-4'>
			<h2 className=' text-2xl font-medium'>
				{' '}
				Товаров на {TotalPrice} ₽
			</h2>
			<ul className='flex text-lg justify-between'>
				<li className=' grow'>Название</li>
				<li className=' min-w-[10rem] text-center'>Количество</li>
				<li className=' min-w-[8rem] text-center '>Цена</li>
			</ul>
			{items.map((item, i) => {
				return (
					<CartItem
						index={i + 1}
						name={item.title}
						number={item.number}
						price={item.price * item.number}
						incrementNumber={incrementNumber}
						decrementNumber={decrementNumber}
					/>
				);
			})}
		</div>
	);
}
