import * as React from 'react';
import { Avatar, Button } from '../../../../workspaces/ui/src';
import { useValue } from 'react-cosmos/fixture';
import styles from './styles/avatar.module.css';
import buttonStyle from './styles/button.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import tom from './images/tom.png';
import lee from './images/lee.png';
import charlie from './images/charlie.png';
import arthur from './images/arthur.png';

const characters = ['Charlie', 'Tom', 'Arthur', 'Lee'];
const characterImages = [charlie, tom, arthur, lee];

export default {
  title: "Components/Avatar",
  component: Avatar,
}as ComponentMeta<typeof Avatar>;

export const Single: ComponentStory<typeof Avatar> = () => {
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

export const Double: ComponentStory<typeof Avatar> = () => {
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

export const Triple: ComponentStory<typeof Avatar> = () => {
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

export const All: ComponentStory<typeof Avatar> = () => {
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

export const Alias: ComponentStory<typeof Avatar> = () => {
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

export const WithButton: ComponentStory<typeof Avatar> = () => {
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