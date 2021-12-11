import * as React from 'react';
import { Game } from '@viveljs/ui';
import { useAtom } from 'jotai';
import { globalStateAtom } from './stores/game';
import { scenesAtom } from './stores/assets';
import { sceneFinder } from './libs/finder';

import exit from '@images/misc/fullExit.png';
import enter from '@images/misc/fullEnter.png';

import '@styles/main.css';

const App = () => {
  const [state] = useAtom(globalStateAtom);
  const [scenes] = useAtom(scenesAtom);

  const CurrentScene = sceneFinder(state.scene, scenes, state.index).custom
    ? sceneFinder(state.scene, scenes, state.index).value
    : sceneFinder('default', scenes, state.index).value;

  return (
    <Game enableFullScreen icon={[enter, exit]}>
      <CurrentScene />
    </Game>
  );
};

export default App;
