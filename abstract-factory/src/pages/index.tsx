import React from 'react';
import { NextPage } from 'next';
import { designFactory1 } from "../abstract-factory-design/design-factory-1";
import { designFactory2 } from '../abstract-factory-design/design-factory-2';

type TProps = {
  title: string
}

const DESIGN = 1;

const IndexPage: NextPage<TProps> = ({ title }: TProps) => {
  // @ts-ignore
  const Button = DESIGN === 1 ?
    designFactory1.createButton()
    : designFactory2.createButton();

  return (
    <div>
      <h2>{title}</h2>
      <Button name={`design-${DESIGN}`} />
      {/*{DESIGN === 1 ? (*/}
      {/*  <Button1 />*/}
      {/*) : (*/}
      {/*  */}
      {/*)}*/}
    </div>
  );
};

export default IndexPage;
