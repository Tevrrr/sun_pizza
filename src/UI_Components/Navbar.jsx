import React from 'react'
import Logo from './Items/Logo'
import Button from './Items/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
		<div className=' bg-orange-500 text-slate-100 p-4'>
			<div className=' max-w-[1200px] mx-auto flex items-center justify-between'>
				<Logo />
				<div className=' flex items-center gap-2 text-lg'>
					<a className='link' href='#'>
						Главная
					</a>
					<a className='link' href='#'>
						Контакты
					</a>
					<a className='link' href='#'>
						О нас
					</a>

					<Button>
						<FontAwesomeIcon icon={faShoppingCart} />
						Корзина
					</Button>
				</div>
			</div>
		</div>
	);
}
