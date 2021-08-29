import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Button } from '../src/components';

const ButtonFixture = () => {
  const [text] = useValue('text', { defaultValue: 'next' });
  return <Button text={text} />;
};

export default ButtonFixture;
