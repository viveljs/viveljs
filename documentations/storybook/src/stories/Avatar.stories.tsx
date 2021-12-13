import * as React from 'react';
import { Avatar, Button } from '../../../../workspaces/ui/src';
import { useValue } from 'react-cosmos/fixture';
import styles from './styles/avatar.module.css';
import buttonStyle from './styles/button.module.css';

import tom from './images/tom.png';
import lee from './images/lee.png';
import charlie from './images/charlie.png';
import arthur from './images/arthur.png';

const characters = ['Charlie', 'Tom', 'Arthur', 'Lee'];
const characterImages = [charlie, tom, arthur, lee];

const Single = () => {
  return (
    <Avatar
      and="and"
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1]]}
      index={0}
      slotDimension={['5rem']}
      textClass={styles.text}
      containerClass={styles.container}
    />
  );
};

const Double = () => {
  return (
    <Avatar
      and="and"
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1, 0]]}
      index={0}
      slotDimension={['5rem']}
      textClass={styles.text}
      containerClass={styles.container}
    />
  );
};

const Triple = () => {
  return (
    <Avatar
      and="and"
      characters={characters}
      characterImages={characterImages}
      characterFlow={[[1, 0, 2]]}
      index={0}
      slotDimension={['5rem']}
      textClass={styles.text}
      containerClass={styles.container}
    />
  );
};

const All = () => {
  return (
    <Avatar
      and="and"
      characters={characters}
      characterImages={characterImages}
      characterFlow={['displayAll']}
      index={0}
      slotDimension={['5rem']}
      textClass={styles.text}
      containerClass={styles.container}
    />
  );
};

const Alias = () => {
  return (
    <Avatar
      and="and"
      characters={characters}
      characterImages={characterImages}
      characterFlow={['All the meddling kids']}
      index={0}
      slotDimension={['5rem']}
      textClass={styles.text}
      containerClass={styles.container}
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
      <Avatar
        and="and"
        characters={characters}
        characterImages={characterImages}
        characterFlow={[[0], [1, 2], [0, 2, 3], [1, 2]]}
        index={index}
        slotDimension={['5rem']}
        textClass={styles.text}
        containerClass={styles.container}
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
  'Custom Alias': <Alias />,
  'Change Index with Button': <WithButton />,
};
