import React from 'react'
import CartItem from '../UI_Components/Items/CartItem';

export default function Cart() {
    return (
		<div className=' flex-col max-w-[1200px] mx-auto p-4'>
			<h2 className=' text-2xl font-medium'>
				{' '}
				{NaN} товар на {NaN} ₽
			</h2>
			<ul className='flex text-lg justify-between'>
				<li className=' grow'>Название</li>
				<li className=' min-w-[10rem] text-center'>Количество</li>
				<li className=' min-w-[8rem] text-center '>Цена</li>
            </ul>
            <CartItem
                index={1}
                name={""}
                number={1}
                price={300}
            />
		</div>
	);
}
