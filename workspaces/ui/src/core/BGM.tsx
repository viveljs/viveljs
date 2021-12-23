import * as React from 'react';
import useSound from '@viveljs/use-sound';
import { useAtom } from 'jotai';

import { globalStateAtom } from '@stores/game';
import { soundsAtom } from '@stores/assets';
import { fileFinder } from '@libs/finder';

import contents from '@contentJSON';

const BGM = () => {
  const [state] = useAtom(globalStateAtom);
  const [sounds] = useAtom(soundsAtom);
  const [currentSound, setCurrentSound] = React.useState<string>(
    fileFinder(contents.bgms[state.index], sounds, false)
  );

  const [playBGM, { stop }] = useSound(currentSound, {
    volume: state.bgmVolume,
    loop: true,
  });

  React.useEffect(() => {
    if (!currentSound.includes(contents.bgms[state.index])) {
      stop();
      setCurrentSound(fileFinder(contents.bgms[state.index], sounds, false));
    }
    return () => {};
  }, [contents.bgms[state.index]]);

  React.useEffect(() => {
    playBGM();
  }, [playBGM]);
  return null;
};

export { BGM };
