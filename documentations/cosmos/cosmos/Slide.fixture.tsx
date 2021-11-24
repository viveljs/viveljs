import * as React from 'react';
import { Slide } from '../../../workspaces/ui/src';

import exit from './images/fullExit.png';
import enter from './images/fullEnter.png';
import slideStyles from './styles/slide.module.css';
import { Bare } from './MultipleChoice.fixture';

import bg0 from './images/background0.jpg';
import bg1 from './images/background1.png';
import bg2 from './images/background2.png';
import bg3 from './images/background3.png';
const images = [bg0, bg1, bg2, bg3];

const slides = images.map((image, index) => {
  return <img key={index} src={image} />;
});

const SingleSlide = () => {
  return (
    <Slide
      slides={slides}
      enableFullScreen
      fullscreenClass={slideStyles.fullscreen}
      icons={[enter, exit]}
      containerClass={slideStyles.container}
      slideClass={slideStyles.slide}
    />
  );
};

const Options = () => {
  return (
    <Slide
      slides={slides}
      enableFullScreen
      fullscreenClass={slideStyles.fullscreen}
      icons={[enter, exit]}
      containerClass={slideStyles.container}
      component={<Bare />}
    />
  );
};

export default {
  'Single image Slide': <SingleSlide />,
  'Multiple Image with options': <Options />,
};
