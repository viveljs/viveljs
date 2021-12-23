import * as React from 'react';
import useSound from '@viveljs/use-sound';

interface BGMProps {
  volume: number;
}

const BGM = (props: BGMProps) => {
  const [currentSound, setCurrentSound] = React.useState<string>(
    fileFinder(contents.bgms[state.index], sounds, false)
  );

  const [playBGM, { stop }] = useSound(currentSound, {
    volume: props.volume,
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
