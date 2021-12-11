import * as React from 'react';
import { FullScreenHandle } from 'react-full-screen';

interface GameProps {
  imageClass?: string;
  buttonClass?: string;
  icon?: string[];
  handle: FullScreenHandle;
}

const FullScreenButton = (props: GameProps) => {
  return (
    <button
      style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        userSelect: 'none',
      }}
      onClick={props.handle.active ? props.handle.exit : props.handle.enter}
      className={props.buttonClass}
    >
      {props.icon ? (
        <img
          src={
            !props.handle.active
              ? props.icon[0]
              : props.icon[1] ?? props.icon[0]
          }
          className={props.imageClass}
        />
      ) : props.handle.active ? (
        'Exit'
      ) : (
        'Enter'
      )}
    </button>
  );
};

export { FullScreenButton };
