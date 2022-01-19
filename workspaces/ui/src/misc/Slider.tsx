import * as React from 'react';
import { FullScreenButton } from './FullScreenButton';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import Carousel from 'nuka-carousel';

interface SlideProps {
  enableFullScreen?: boolean;
  fullScreenClass?: string;
  containerClass?: string;
  iconEnterFullScreen?: React.ReactElement;
  iconExitFullScreen?: React.ReactElement;
  buttonFullScreen?: string;
  slides: React.ReactNode[];
}

export const Slide = (props: SlideProps) => {
  const slideHandle = useFullScreenHandle();

  return (
    <FullScreen
      handle={slideHandle}
      className={
        slideHandle.active ? props.fullScreenClass : props.containerClass
      }
    >
      <Carousel
        initialSlideWidth={300}
        renderBottomCenterControls={() => {
          if (props.enableFullScreen) {
            return (
              <FullScreenButton
                handle={slideHandle}
                iconEnterFullScreen={props.iconEnterFullScreen}
                iconExitFullScreen={props.iconExitFullScreen}
                buttonClass={props.buttonFullScreen}
              />
            );
          }
        }}
      >
        {props.slides}
      </Carousel>
    </FullScreen>
  );
};
