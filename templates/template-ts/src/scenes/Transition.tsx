import * as React from 'react';
import { useAtom } from 'jotai';
import { TransitionScene, Dialogue, Button } from '@viveljs/ui';
import { globalStateAtom } from '../stores/game';

import content from '@contentJSON';

import buttonStyles from '@styles/button.module.css';
import transStyle from './styles/dialogueTransition.module.css';
import { backgroundsAtom } from '../stores/assets';
import { fileArrayFinder } from '../libs/finder';
import { buttonHandleClick } from '../libs/buttonHandleClick';

const Transition = () => {
  const [state] = useAtom(globalStateAtom);
  const [backgroundImages] = useAtom(backgroundsAtom);
  return (
    <TransitionScene
      backgrounds={fileArrayFinder(content.backgrounds, backgroundImages)}
      index={state.index}
      transition="dark"
    >
      <Dialogue
        text={content.lines}
        index={state.index}
        ySide={
          <Button
            className={buttonStyles.button}
            text="next"
            onClick={() => {
              if (content.tos[state.index].length != 0)
                buttonHandleClick(content.tos[state.index], false);
              else buttonHandleClick('default');
            }}
          />
        }
        delayed="y"
        dialogueClassName={transStyle.dialogue}
        yClassName={transStyle.ySide}
        linesClassName={transStyle.lines}
      />
    </TransitionScene>
  );
};

export default Transition;
