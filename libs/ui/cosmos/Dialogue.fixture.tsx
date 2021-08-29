import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Dialogue, Button } from '../src/components';

const dialogue = [
  'Hey, how are you ?',
  'This is a demo.',
  "Let's just hope this works well in the wild :)",
];

const Horizontal = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      xSide={<Button text="next" onClick={handleClick} />}
      delayed="x"
    />
  );
};

const Vertical = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={<Button text="next" onClick={handleClick} />}
      delayed="y"
    />
  );
};

const BothX = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={<Button text="next" onClick={handleClick} />}
      xSide={<Button text="next" onClick={handleClick} />}
      delayed="x"
    />
  );
};

const BothY = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={<Button text="next" onClick={handleClick} />}
      xSide={<Button text="next" onClick={handleClick} />}
      delayed="y"
    />
  );
};

const BothNone = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={<Button text="next" onClick={handleClick} />}
      xSide={<Button text="next" onClick={handleClick} />}
      delayed="none"
    />
  );
};

export default {
  Bare: <Dialogue text={dialogue} index={0} delayed="none" />,
  'Additional vertical element': <Vertical />,
  'Additional horizontal element': <Horizontal />,
  'Horizontal delayed element with both add on': <BothX />,
  'Vertical delayed element with both add on': <BothY />,
  'No delayed element with both add on': <BothNone />,
};
