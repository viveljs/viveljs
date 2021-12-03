import * as React from 'react';
import { useAtom } from 'jotai';
import { DefaultScene, Dialogue, Button, Avatar } from '@viveljs/ui';
import { globalStateAtom } from '../stores/game';

import content from '@contentJSON';

import avatarStyles from '@styles/avatar.module.css';
import buttonStyles from '@styles/button.module.css';
import dialogueStyles from '@styles/dialogueX.module.css';
import { backgroundsAtom, charactersAtom } from '../stores/assets';
import { fileArrayFinder } from '../libs/finder';
import { buttonHandleClick } from '../libs/buttonHandleClick';

const Default = () => {
  const [state] = useAtom(globalStateAtom);
  const [characterImages] = useAtom(charactersAtom);
  const [backgroundImages] = useAtom(backgroundsAtom);
  return (
    <DefaultScene
      backgrounds={fileArrayFinder(content.backgrounds, backgroundImages)}
      index={state.index}
    >
      <Dialogue
        text={content.lines}
        index={state.index}
        xSideAfter={
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
        xSideBefore={
          <Avatar
            and="and"
            characters={content.characters}
            characterImages={fileArrayFinder(
              content.characters,
              characterImages
            )}
            characterFlow={content.characterFlows}
            index={state.index}
            slotDimension={['5rem']}
            textClass={avatarStyles.text}
            containerClass={avatarStyles.container}
          />
        }
        delayed="x"
        dialogueClassName={dialogueStyles.dialogue}
        xClassName={dialogueStyles.xSide}
        yClassName={dialogueStyles.ySide}
        linesClassName={dialogueStyles.lines}
      />
    </DefaultScene>
  );
};

export default Default;
