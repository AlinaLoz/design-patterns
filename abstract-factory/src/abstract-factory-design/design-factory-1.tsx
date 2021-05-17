import React from 'react';
import { IAbstractDesignFactory } from "./abstract-factory-design.interface";
import { Button1 } from "../components/design-1/Button1";

class DesignFactory1 implements IAbstractDesignFactory {

	createButton(): typeof Button1 {
		return (props) => (
			<Button1 {...props}/>
		);
	}

}

export const designFactory1 = new DesignFactory1();
