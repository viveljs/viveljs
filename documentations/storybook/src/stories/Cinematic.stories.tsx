import * as React from 'react';
import { CinematicScene } from '../../../../workspaces/ui/src/core/CinematicScene';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const video = {
  poster: 'https://media.vimejs.com/poster.png',
  src: 'https://media.vimejs.com/720p.mp4',
};

const subtitle = {
  lang: 'en',
  src: './misc/englishSubs.vtt',
  label: 'English',
};

export default {
  title: "Components/Cinematic",
  component: CinematicScene,
}as ComponentMeta<typeof CinematicScene>;

export const CinematicNoSkip: ComponentStory<typeof CinematicScene> = () => {
  return <CinematicScene subtitle={subtitle} video={video} />;
};
