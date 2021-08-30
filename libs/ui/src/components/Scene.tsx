import * as React from 'react';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  backgrounds: string[];
  index: number;
}

interface TransitionProps {
  transition?: 'dark' | 'light';
  children: React.ReactNode;
  className?: string;
  backgrounds: string[];
  index: number;
}

export const Transition = (props: TransitionProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100vh',
        backgroundColor:
          props.transition == 'dark'
            ? 'rgba(0,0,0,0.8)'
            : 'rgba(255,255,255,0.8)',
      }}
    ></div>
  );
};

export const Scene = (props: SceneProps) => {
  return (
    <main
      id={`scene-${props.index}`}
      style={{
        backgroundImage: `url(${props.backgrounds[props.index]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        boxSizing: 'border-box',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:
          React.Children.count(props.children) > 1 ? 'space-between' : 'end',
      }}
      className={props.className}
    >
      {props.children}
    </main>
  );
};

export default Scene;
