import * as React from 'react';
import { CinematicScene } from '@viveljs/ui';
import { useAtom } from 'jotai';
import { globalStateAtom } from '../stores/game';
import content from '@contentJSON';

const subtitle = {
  lang: 'en',
  src: './misc/englishSubs.vtt',
  label: 'English',
};

const Cinematic = () => {
  const [state] = useAtom(globalStateAtom);

  return (
    <CinematicScene subtitle={subtitle} video={content.video[state.index]} />
  );
};

export default Cinematic;
