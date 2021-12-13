import * as React from 'react';
import { Game } from '../../../../workspaces/ui/src';
import { DefaultSingle } from './Scene.stories';
import styles from './styles/game.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import exit from './images/fullExit.png';
import enter from './images/fullEnter.png';

export default {
  title: "Components/Game",
  component: Game,
}as ComponentMeta<typeof Game>;

export const GameScreen: ComponentStory<typeof Game> = () => {
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
