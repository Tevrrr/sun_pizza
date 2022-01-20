/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Items/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    const [hidden, setHidden] = useState('hidden');
	return (
		<div className=' min-h-[5rem] bg-orange-500 text-slate-100 p-4'>
			<div className=' max-w-[1200px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between'>
				<Link to='/'>
					<Logo />
				</Link>
				<button
					className=' block sm:hidden text-4xl'
					onClick={() => {
						if (hidden === 'hidden') setHidden('');
						else setHidden('hidden');
					}}>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div
					className={
						' w-full sm:w-auto sm:flex  items-center gap-2 text-lg ' +
						hidden
					}>
					<Link className='link' to='/'>
						Главная
					</Link>
					<Link className='link' to='/Contacts'>
						Контакты
					</Link>
					<Link className='link' to='/AboutUs'>
						О нас
					</Link>

					<Link
						className='inline-flex items-center px-4 py-2 gap-2 rounded-md border-2
                                text-slate-100 bg-orange-500 hover:text-orange-500 hover:bg-slate-50 hover:border-orange-500
                                duration-200 transition-all font-bold'
						to='/Cart'>
						<FontAwesomeIcon icon={faShoppingCart} />
						Корзина
					</Link>
				</div>
			</div>
		</div>
	);
}
