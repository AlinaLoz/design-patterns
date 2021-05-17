import React from 'react';

export interface IAbstractDesignFactory {
	createButton(): React.FC<{ name: string }>;
}
