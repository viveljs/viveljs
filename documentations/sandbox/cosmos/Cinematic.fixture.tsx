import * as React from 'react';
import { Cinematic } from '../../../workspaces/ui/src';

const video = {
  poster: 'https://media.vimejs.com/poster.png',
  src: 'https://media.vimejs.com/720p.mp4',
};

const subtitle = {
  lang: 'en',
  src: './misc/englishSubs.vtt',
  label: 'English',
};

const CinematicNoSkip = () => {
  return <Cinematic subtitle={subtitle} video={video} />;
};

export default {
  'Cinematic without skip': <CinematicNoSkip />,
};
