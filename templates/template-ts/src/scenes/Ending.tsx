import * as React from 'react';
import { Button, TransitionScene } from '@viveljs/ui';
import { useAtom } from 'jotai';
import background from '@images/backgrounds/default.jpg';
import { globalStateAtom } from '../stores/game';
import { buttonHandleClick } from '../libs/buttonHandleClick';

const Ending = () => {
  const [state] = useAtom(globalStateAtom);
  return (
    <TransitionScene backgrounds={[background]} index={state.index}>
      <Button
        text="Go to Start"
        onClick={() => {
          buttonHandleClick('opening', false);
        }}
      />
    </TransitionScene>
  );
};

export default Ending;
