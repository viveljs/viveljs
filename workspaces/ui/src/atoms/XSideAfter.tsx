import * as React from 'react';

const XSideAfter = (xSideAfter: React.ReactNode) => {
  if (xSideAfter) return <div id="xSideAfter">{xSideAfter}</div>;
  return null;
};

export { XSideAfter };
