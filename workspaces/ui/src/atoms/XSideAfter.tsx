import * as React from 'react';

interface XSideAfterProps {
  component: React.ReactNode;
}

export const XSideAfter = (props: XSideAfterProps) => {
  if (props.component)
    return <div className="xSideAfter">{props.component}</div>;
  return null;
};
