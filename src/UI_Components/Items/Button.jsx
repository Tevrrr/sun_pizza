/** @format */

import React from 'react';

export default function Button(props) {
	return (
		<button
			className={
				`inline-flex items-center px-4 py-2 gap-2 rounded-md border-2
                text-slate-100 bg-orange-500 hover:text-orange-500 hover:bg-slate-50 hover:border-orange-500
                duration-200 transition-all font-bold  ` + props.className
			}>
			{props.children}
		</button>
	);
}
