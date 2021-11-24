import * as React from 'react';

interface ySideProps {
  component: React.ReactNode,
  yClassName?: string;
}

const YSide = (props: ySideProps) => {
  if (props.component)
    return (
      <div id="yLines" className={props.yClassName}>
        {props.component}
      </div>
    );
  return null;
};

export { YSide }