import * as React from 'react';

interface xSideAfterProps {
  component: React.ReactNode;
}

export const XSideAfter = (props: xSideAfterProps) => {
  if (props.component)
    return <div className="xSideAfter">{props.component}</div>;
  return null;
};
