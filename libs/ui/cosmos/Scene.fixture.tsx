import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Scene, Dialogue, Avatar, Button } from '../src/components';

import xStyle from './styles/dialogueX.module.css';
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

import bg0 from './images/background0.jpg';
import bg1 from './images/background1.png';
import bg2 from './images/background2.png';
import bg3 from './images/background3.png';

const scenes = [bg0, bg1, bg2, bg3];

const Single = () => {
  const [lines] = useValue('lines', { defaultValue: dialogue });

  const [index, setIndex] = useValue<number>('index', { defaultValue: 0 });

  const handleClick = () => {
    if (index < dialogue.length - 1) setIndex(index + 1);
  };

  return (
    <Scene backgrounds={scenes} index={index}>
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
        delayed="y"
        dialogueClassName={xStyle.dialogue}
        xClassName={xStyle.xSide}
        yClassName={xStyle.ySide}
        linesClassName={xStyle.lines}
      />
    </Scene>
  );
};

export default {
  'Scene with one element': <Single />,
};
