import React from 'react'

export default function Filtr_panel() {
    return (
		<div className=' flex items-center h-16 gap-2 overflow-x-auto overflow-y-hidden'>
			<label>
				<input className=' hidden' type='radio' name='drone' />{' '}
				<span>Все</span>
			</label>
			<label>
				<input className=' hidden' type='radio' name='drone' />{' '}
				<span>Мяcные</span>
			</label>
			<label>
				<input className=' hidden' type='radio' name='drone' />{' '}
				<span>Вегетарианские</span>
			</label>
			<label>
				<input className=' hidden' type='radio' name='drone' />{' '}
				<span>Веганские</span>
			</label>
		</div>
	);
}
