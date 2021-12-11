import * as React from 'react';
import { Line } from './Line';
import { XSideAfter } from './XSideAfter';
import { useTypewriter } from 'react-simple-typewriter';

interface LinesProps {
  delayed: 'x' | 'y' | 'none';
  characterNames?: React.ReactNode;
  xSideBefore?: React.ReactNode;
  xSideAfter?: React.ReactNode;
  linesClassName?: string;
  xClassName?: string;
  instant?: boolean;
  visible?: boolean;
  setVisibles: (x: boolean) => void;
  line: string;
  additionalFlag?: boolean;
}

const Lines = (props: LinesProps) => {
  const { text } = useTypewriter({
    words: [props.line],
    typeSpeed: props.instant ? 2 : 20,
    onLoopDone: () => props.setVisibles(true),
  });

  return (
    <div className={props.xClassName}>
      {props.xSideBefore && (
        <div className="xSideBefore">{props.xSideBefore}</div>
      )}
      <Line
        visible={props.visible}
        text={text}
        line={props.line}
        characterNames={props.characterNames}
        linesClassName={props.linesClassName}
        additionalFlag={props.additionalFlag}
      />
      {(props.delayed == 'x' ? props.visible : true) && (
        <XSideAfter component={props.xSideAfter} />
      )}
    </div>
  );
};

export { Lines };
