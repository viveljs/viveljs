import * as React from 'react';

interface YSideProps {
  component: React.ReactNode;
  yClassName?: string;
}

const YSide = (props: YSideProps) => {
  if (props.component)
    return (
      <div id="yLines" className={props.yClassName}>
        {props.component}
      </div>
    );
  return null;
};

export { YSide };
