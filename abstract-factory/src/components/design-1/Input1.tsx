import React from 'react';

type TInput = {
	placeholder: string;
};

export const Input1: React.FC<TInput> = ({ placeholder }) => {
	return (
		<div>
			<p>input type 1</p>
			<input type={placeholder}/>
		</div>
	);
};
