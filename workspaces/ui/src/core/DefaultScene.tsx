import * as React from 'react';

interface DefaultSceneProps {
  children: React.ReactNode;
  className?: string;
  backgrounds: string[];
  index: number;
}

export const DefaultScene = (props: DefaultSceneProps) => {
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
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={props.className ? {} : { width: '90%' }}
        className={props.className}
      >
        {props.children}
      </div>
    </main>
  );
};
