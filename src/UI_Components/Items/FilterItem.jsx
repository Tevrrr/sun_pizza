import React from 'react'

export default function FilterItem({name, setFilter }) {
	return (
			<label>
				<input
					value={name}
					className=' hidden'
					type='radio'
					name='drone'
					onChange={(e) => setFilter(e.target.value)}
				/>{' '}
				<span>{name}</span>
			</label>
	);
}
