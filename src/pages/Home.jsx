import React, { useState } from 'react';
import Card_block from '../UI_Components/Card_block'
import Filter_panel from '../UI_Components/Filter_panel'
import WLine from '../UI_Components/Items/WLine'
export default function Home({ menu, addItemCart, cart }) {
	const [filter, setFilter] = useState('Все');
	const [values, setValues] = useState([
		'Все',
		'Мясные',
		'Вегетарианские',
		'Веганские',
	]);
	return (
		<div className=' max-w-[1200px] flex-col mx-auto p-4'>
			<Filter_panel setFilter={setFilter} values={values} />
			<WLine />
			<Card_block
				filter={filter}
				items={menu}
				addItemCart={addItemCart}
				cart={cart}
			/>
		</div>
	);
}
