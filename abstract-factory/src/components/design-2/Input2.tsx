import React from 'react';

type TInput = {
	placeholder: string;
};

export const Input2: React.FC<TInput> = ({ placeholder }) => {
	return (
		<div>
			<p>input type 2</p>
			<input type={placeholder}/>
		</div>
	);
};
