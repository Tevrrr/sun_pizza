/** @format */

import React from 'react';
import Card from './Items/Card';

export default function Card_block({ items, filter, addItemCart, cart }) {
	return (
		<div className=' flex flex-wrap sm:justify-start justify-center py-2 gap-4 my-4'>
			{items.map((item, i) => {
                if (item.tegs.indexOf(filter) < 0) return;
				return (
					<Card
						url={item.url}
						title={item.title}
						ingredients={item.ingredients}
						availability={item.availability}
						price={item.price}
						addItemCart={addItemCart}
						Added={item.Added}
						key={Date.now() - 999 * i}
					/>
				);
			})}
		</div>
	);
}
