import React from 'react';
import { IAbstractDesignFactory } from "./abstract-factory-design.interface";
import { Button2 } from "../components/design-2/Button2";

export class DesignFactory2 implements IAbstractDesignFactory {

	createButton(): typeof Button2 {
		return (props) => (
			<Button2 {...props}/>
		);
	}

}

export const designFactory2 = new DesignFactory2();
