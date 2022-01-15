import React from 'react'

export default function CartItem({index, name, price, number}) {
    return (
		<ul className='flex items-center text-lg justify-between my-4'>
			<li className=' grow'>
				{index} {name}
			</li>
			<li className=' flex justify-center items-center min-w-[10rem]'>
				<button
					className=' text-3xl inline-flex justify-center items-center w-8 h-8 rounded-full border-2 bg-orange-500 hover:text-orange-500 hover:bg-slate-50 hover:border-orange-500
                duration-200 transition-all'>
					+
				</button>
				 {number} 
				<button
					className=' text-4xl  inline-flex justify-center items-center w-8 h-8 rounded-full border-2 bg-orange-500 hover:text-orange-500 hover:bg-slate-50 hover:border-orange-500
                duration-200 transition-all'>
					-
				</button>
			</li>
			<li className=' min-w-[8rem] text-center'>{price} ₽</li>
		</ul>
	);
}
