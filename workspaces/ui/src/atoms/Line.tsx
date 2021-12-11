import * as React from 'react';

interface lineProps {
  text: string;
  characterNames?: React.ReactNode;
  linesClassName?: string;
  visible?: boolean;
  line: string;
  additionalFlag?: boolean;
}

const Line = (props: lineProps) => {
  if (props.characterNames)
    return (
      <div>
        {props.characterNames}
        <div id="lines" className={props.linesClassName}>
          {props.visible && props.additionalFlag ? props.line : props.text}
        </div>
      </div>
    );
  return (
    <div id="lines" className={props.linesClassName}>
      {props.visible && props.additionalFlag ? props.line : props.text}
    </div>
  );
};

export { Line };
