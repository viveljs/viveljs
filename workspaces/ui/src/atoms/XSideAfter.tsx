import * as React from 'react';

interface xSideAfterProps {
  component: React.ReactNode;
}

export const XSideAfter = (props: xSideAfterProps) => {
  if (props.component) return <div id="xSideAfter">{props.component}</div>;
  return null;
};
