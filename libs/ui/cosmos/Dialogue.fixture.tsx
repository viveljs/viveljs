import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Dialogue, Button } from '../src/components';

const dialogue = [
  'Hey',
  'This is a demo.',
  "Let's just hope this works well in the wild :)",
];

const Before = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });
  return <Dialogue text={lines} index={0} before={<Button text="next" />} />;
};

export default {
  Bare: <Dialogue text={dialogue} index={0} />,
  'Button on Top': <Before />,
};
