import React from 'react'

export default function InformationCard({title, text}) {
    return (
		<div className=' max-w-md hover:translate-y-[-0.25rem] transition-all md:max-w-[48%] bg-orange-200 rounded-md p-4'>
			<h3 className=' text-orange-600 font-extrabold text-4xl mb-6'>{title}</h3>
			<p className=' text-lg'>{text}</p>
		</div>
	);
}
