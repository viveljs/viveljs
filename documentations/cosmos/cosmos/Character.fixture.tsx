import * as React from 'react';
import { Character, Button } from '../../../workspaces/ui/src';
import { useValue } from 'react-cosmos/fixture';

import buttonStyle from './styles/button.module.css';

import tom from './images/tom.png';
import lee from './images/lee.png';
import charlie from './images/charlie.png';
import arthur from './images/arthur.png';

const characters = ['Charlie', 'Tom', 'Arthur', 'Lee'];
const characterImages = [charlie, tom, arthur, lee];

const Single = () => {
  return (
    <Character
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1]]}
      index={0}
    />
  );
};

const Double = () => {
  return (
    <Character
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1, 0]]}
      index={0}
    />
  );
};

const Triple = () => {
  return (
    <Character
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1, 0, 2]]}
      index={0}
    />
  );
};

const All = () => {
  return (
    <Character
      characters={characters}
      characterImages={characterImages}
      characterFlow={['displayAll']}
      index={0}
    />
  );
};

const WithButton = () => {
  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });
  const handleClick = () => {
    if (index < characters.length - 1) setIndex(index + 1);
  };
  return (
    <div>
      <Character
        characters={characters}
        characterImages={characterImages}
        characterFlow={[[0], [1, 2], [0, 2, 3], [1, 2]]}
        index={index}
      />
      <Button
        text="next"
        className={buttonStyle.button}
        onClick={handleClick}
      />
    </div>
  );
};

export default {
  Single: <Single />,
  Double: <Double />,
  Triple: <Triple />,
  'All Characters': <All />,
  'Change Index with Button': <WithButton />,
};
