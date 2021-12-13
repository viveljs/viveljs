import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import {
  DefaultScene,
  TransitionScene,
  Dialogue,
  Avatar,
  Button,
  Character,
  CharacterNames,
} from '../../../../workspaces/ui/src';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import xStyle from './styles/dialogueX.module.css';
import styles from './styles/avatar.module.css';
import buttonStyle from './styles/button.module.css';
import transStyle from './styles/dialogueTransition.module.css';
import logoStyle from './styles/logo.module.css';
import characterNamesStyle from './styles/characterNames.module.css';

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

import bg0 from './images/background0.jpg';
import bg1 from './images/background1.png';
import bg2 from './images/background2.png';
import bg3 from './images/background3.png';

const scenes = [bg0, bg1, bg2, bg3];

export default {
  title: "Components/Scene",
  component: DefaultScene,
}as ComponentMeta<typeof DefaultScene>;

export const DefaultSingle: ComponentStory<typeof DefaultScene> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <DefaultScene backgrounds={scenes} index={index}>
      <Dialogue
        text={lines}
        index={index}
        xSideAfter={
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
        delayed="x"
        dialogueClassName={xStyle.dialogue}
        xClassName={xStyle.xSide}
        yClassName={xStyle.ySide}
        linesClassName={xStyle.lines}
      />
    </DefaultScene>
  );
};

export const CharacterSingle: ComponentStory<typeof DefaultScene> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <DefaultScene backgrounds={scenes} index={index}>
      <Character
        index={index}
        characters={characters}
        characterImages={characterImages}
        characterFlow={[[0], [1, 2], [0, 2, 3], [1, 2]]}
      />
      <Dialogue
        text={lines}
        index={index}
        characterNames={
          <CharacterNames
            index={index}
            characters={characters}
            characterFlow={[[0], [1, 2], [0, 2, 3], [1, 2]]}
            and="and"
            textClass={characterNamesStyle.text}
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
    </DefaultScene>
  );
};

export const TransitionSingle: ComponentStory<typeof DefaultScene> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <TransitionScene backgrounds={scenes} index={index} transition="dark">
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
        delayed="y"
        dialogueClassName={transStyle.dialogue}
        yClassName={xStyle.ySide}
        linesClassName={transStyle.lines}
      />
    </TransitionScene>
  );
};

export const Instant: ComponentStory<typeof DefaultScene> = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <TransitionScene backgrounds={scenes} index={index} transition="dark">
      <div className={logoStyle.logo}>Vivel</div>
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
        delayed="y"
        instant
        dialogueClassName={transStyle.dialogue}
        yClassName={xStyle.ySide}
        linesClassName={transStyle.lines}
      />
    </TransitionScene>
  );
};
