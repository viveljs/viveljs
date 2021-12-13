import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Dialogue, Button, Avatar } from '../../../../workspaces/ui/src';

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

const Horizontal = () => {
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

const Vertical = () => {
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

const BothX = () => {
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

const BothY = () => {
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

const BothNone = () => {
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

export default {
  'Bare with no additional element or css': (
    <Dialogue text={dialogue} index={0} delayed="none" />
  ),
  'Additional vertical element': <Vertical />,
  'Additional horizontal element': <Horizontal />,
  'Horizontal delayed element with both add on': <BothX />,
  'Vertical delayed element with both add on': <BothY />,
  'No delayed element with both add on': <BothNone />,
};
