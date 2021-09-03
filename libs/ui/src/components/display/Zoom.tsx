import * as React from 'react';

interface ZoomProps {
  className?: string;
}

export const Zoom = (props: ZoomProps) => {
  return <div className={props.className}></div>;
};

export default Zoom;
