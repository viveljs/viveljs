import * as React from 'react';
import { Game } from '../src/components';
import { DefaultSingle } from './Scene.fixture';
import styles from './styles/game.module.css';

import exit from './images/fullExit.png';
import enter from './images/fullEnter.png';

const GameScreen = () => {
  return (
    <Game
      enableFullScreen
      icon={[enter, exit]}
      buttonClass={styles.button}
      imageClass={styles.image}
    >
      <DefaultSingle />
    </Game>
  );
};

export default {
  GameScreen: <GameScreen />,
};
