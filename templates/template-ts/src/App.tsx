import * as React from 'react';
import { Game } from '@viveljs/ui';
import { useAtom } from 'jotai';
import { globalStateAtom } from './stores/game';
import { scenesAtom } from './stores/assets';
import { fileFinder } from './libs/finder';

import exit from '@images/misc/fullExit.png';
import enter from '@images/misc/fullEnter.png';

import '@styles/main.css';

const App = () => {
  const [state] = useAtom(globalStateAtom);
  const [scenes] = useAtom(scenesAtom);

  const CurrentScene = fileFinder(state.type, scenes);

  return (
    <Game enableFullScreen icon={[enter, exit]}>
      <CurrentScene />
    </Game>
  );
};

export default App;
