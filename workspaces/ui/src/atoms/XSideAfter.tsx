import * as React from 'react';

interface xSideAfterProps {
  component: React.ReactNode;
}

const XSideAfter = (props: xSideAfterProps) => {
  if (props.component) return <div id="xSideAfter">{props.component}</div>;
  return null;
};

export { XSideAfter };
