import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Logo() {
    return (
		<div className=' font-bold text-2xl flex items-center gap-2'>
			<FontAwesomeIcon icon={faSun} /> SunPizza
		</div>
	);
}
