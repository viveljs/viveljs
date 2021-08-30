import * as React from 'react';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
  backgrounds: string[];
  index: number;
}

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
