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

  // const FullScreenButton = () => {
  //   return (
  //     <button
  //       style={{ position: 'fixed', right: '1rem', bottom: '1rem' }}
  //       onClick={handle.active ? handle.exit : handle.enter}
  //       className={props.buttonClass}
  //     >
  //       {props.icon ? (
  //         <img
  //           src={!handle.active ? props.icon[0] : props.icon[1] ?? props.icon[0]}
  //           className={props.imageClass}
  //         />
  //       ) : handle.active ? (
  //         'Exit'
  //       ) : (
  //         'Enter'
  //       )}
  //     </button>
  //   );
  // };

  return (
    <FullScreen handle={handle}>
      <section id="game">{props.children}</section>
      {props.enableFullScreen && <FullScreenButton buttonClass={props.buttonClass} icon={props.icon} imageClass={props.imageClass}/>}
    </FullScreen>
  );
};
