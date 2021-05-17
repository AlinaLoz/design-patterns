import React from 'react';

type TButton = {
	name: string;
};

export const Button2: React.FC<TButton> = ({ name }) => {
	return (
		<div>
			<p>buton type 2</p>
			<label htmlFor="btn1">click on button</label>
			<button id="btn1">{name}</button>
		</div>
	);
};
