import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Dialogue, Button, Avatar } from '../../../../workspaces/ui/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import xStyle from './styles/dialogueX.module.css';
import yStyle from './styles/dialogueY.module.css';
import styles from './styles/avatar.module.css';
import buttonStyle from './styles/button.module.css';

import tom from './images/tom.png';
import lee from './images/lee.png';
import charlie from './images/charlie.png';
import arthur from './images/arthur.png';

const characters = ['Charlie', 'Tom', 'Arthur', 'Lee'];
const characterImages = [charlie, tom, arthur, lee];
const dialogue = [
  'Hey, how are you ?',
  'This is a demo.',
  "Let's just hope this works well in the wild :)",
  'Have fun using VivelJS',
];

export default {
  title: "Components/Dialogue",
  component: Dialogue,
}as ComponentMeta<typeof Dialogue>;

export const Horizontal: ComponentStory<typeof Dialogue> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      xSideAfter={
        <Button
          text="next"
          className={buttonStyle.button}
          onClick={handleClick}
        />
      }
      delayed="x"
      dialogueClassName={xStyle.dialogue}
      xClassName={xStyle.xSide}
      yClassName={xStyle.ySide}
      linesClassName={xStyle.lines}
    />
  );
};

export const Vertical: ComponentStory<typeof Dialogue> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={
        <Button
          text="next"
          className={buttonStyle.button}
          onClick={handleClick}
        />
      }
      delayed="y"
      dialogueClassName={yStyle.dialogue}
      xClassName={yStyle.xSide}
      yClassName={yStyle.ySide}
      linesClassName={yStyle.lines}
    />
  );
};

export const BothX: ComponentStory<typeof Dialogue> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={
        <Button
          className={buttonStyle.button}
          text="next"
          onClick={handleClick}
        />
      }
      xSideAfter={
        <Button
          className={buttonStyle.button}
          text="next"
          onClick={handleClick}
        />
      }
      delayed="x"
      dialogueClassName={xStyle.dialogue}
      xClassName={xStyle.xSide}
      yClassName={xStyle.ySide}
      linesClassName={xStyle.lines}
    />
  );
};

export const BothY: ComponentStory<typeof Dialogue> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={
        <Button
          text="next"
          className={buttonStyle.button}
          onClick={handleClick}
        />
      }
      xSideBefore={
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
      }
      delayed="y"
      dialogueClassName={yStyle.dialogue}
      xClassName={yStyle.xSide}
      yClassName={yStyle.ySide}
      linesClassName={yStyle.lines}
    />
  );
};

export const BothNone: ComponentStory<typeof Dialogue> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Dialogue
      text={lines}
      index={index}
      ySide={
        <Button
          className={buttonStyle.button}
          text="next"
          onClick={handleClick}
        />
      }
      xSideBefore={
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
      }
      delayed="none"
      dialogueClassName={xStyle.dialogue}
      xClassName={xStyle.xSide}
      yClassName={xStyle.ySide}
      linesClassName={xStyle.lines}
    />
  );
};
