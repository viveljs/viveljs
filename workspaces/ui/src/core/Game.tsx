import * as React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FullScreenButton } from '../atoms/FullScreenButton';

interface GameProps {
  children: React.ReactNode;
  enableFullScreen: boolean;
  imageClass?: string;
  buttonClass?: string;
  icon?: string[];
}

export const Game = (props: GameProps) => {
  const fullScreenHandle = useFullScreenHandle();

  return (
    <FullScreen handle={fullScreenHandle}>
      <section id="game">{props.children}</section>
      {props.enableFullScreen && (
        <FullScreenButton
          handle={fullScreenHandle}
          imageClass={props.imageClass}
          buttonClass={props.buttonClass}
          icon={props.icon}
        />
      )}
    </FullScreen>
  );
};
