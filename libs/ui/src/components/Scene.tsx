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

export const TransitionScene = (props: TransitionProps) => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100vh',
          backgroundColor:
            props.transition == 'dark'
              ? 'rgba(0,0,0,0.93)'
              : 'rgba(255,255,255,0.9)',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'flex',
          justifyContent:
            React.Children.count(props.children) > 1
              ? 'space-between'
              : 'center',
        }}
      >
        {props.children}
        {React.Children.count(props.children) > 1 && <div></div>}
        {/* Empty div because of doesn't know how to put center and top flex element*/}
      </div>
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
        }}
        className={props.className}
      ></main>
    </>
  );
};

export const DefaultScene = (props: SceneProps) => {
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
      className={props.className}
    >
      {props.children}
    </main>
  );
};

export default DefaultScene;
