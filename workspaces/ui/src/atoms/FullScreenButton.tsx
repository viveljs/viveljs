import * as React from 'react';
import { useFullScreenHandle } from 'react-full-screen';

interface GameProps {
  imageClass?: string;
  buttonClass?: string;
  icon?: string[];
}


const FullScreenButton = (props: GameProps) => {
  const handle = useFullScreenHandle();
  return (
    <button
      style={{ position: 'fixed', right: '1rem', bottom: '1rem' }}
      onClick={handle.active ? handle.exit : handle.enter}
      className={props.buttonClass}
    >
      {props.icon ? (
        <img
          src={
            !handle.active ? props.icon[0] : props.icon[1] ?? props.icon[0]
          }
          className={props.imageClass}
        />
      ) : handle.active ? (
        'Exit'
      ) : (
        'Enter'
      )}
    </button>
  );
};

export { FullScreenButton }