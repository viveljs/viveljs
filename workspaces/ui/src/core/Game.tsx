import * as React from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { FullScreenButton } from '../atoms/FullScreenButton'

interface GameProps {
  children: React.ReactNode;
  enableFullScreen: boolean;
  imageClass?: string;
  buttonClass?: string;
  icon?: string[];
}

export const Game = (props: GameProps) => {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <section id="game">{props.children}</section>
      {props.enableFullScreen && <FullScreenButton imageClass={props.imageClass} buttonClass={props.buttonClass} icon={props.icon}/>}
    </FullScreen>
  );
};
