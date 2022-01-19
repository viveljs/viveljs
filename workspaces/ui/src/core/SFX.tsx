import * as React from 'react';
import useSound from '@viveljs/use-sound';
import { useAtom } from 'jotai';

import { globalStateAtom } from '@stores/game';
import { soundsAtom } from '@stores/assets';
import { fileFinder } from '@libs/finder';

import contents from '@contentJSON';

const SFX = () => {
  const [state] = useAtom(globalStateAtom);
  const [sounds] = useAtom(soundsAtom);
  const [currentSound, setCurrentSound] = React.useState<string>(
    fileFinder(contents.sfxes[state.index], sounds, false)
  );

  const [play] = useSound(currentSound, {
    volume: state.sfxVolume,
  });

  React.useEffect(() => {
    if (contents.sfxes[state.index].length > 0) {
      setCurrentSound(fileFinder(contents.sfxes[state.index], sounds, false));
    }
    return () => {};
  }, [contents.sfxes[state.index]]);

  React.useEffect(() => {
    play();
  }, [play]);

  return null;
};

export { SFX };
