import React from 'react'
import FilterItem from './Items/FilterItem';

export default function Filtr_panel({ values = [], setFilter }) {
	return (
		<div className=' flex items-center h-16 gap-2 overflow-x-auto overflow-y-hidden'>
			{values.map((item, i) => {
				return (
					<FilterItem
						setFilter={setFilter}
						name={item}
					/>
				);
			})}
		</div>
	);
}
