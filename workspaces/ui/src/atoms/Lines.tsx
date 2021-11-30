import { Line } from './Line'
import { XSideAfter } from './XSideAfter'
import { useTypewriter } from 'react-simple-typewriter';

interface LinesProps {
  delayed: 'x' | 'y' | 'none';
  characterNames?: React.ReactNode;
  xSideBefore?: React.ReactNode;
  xSideAfter?: React.ReactNode;
  linesClassName?: string;
  xClassName?: string;
  instant?: boolean;
  visibles?: boolean;
  setVisibles: any;
  lines: any;
} 

const Lines = (props: LinesProps) => {
  const { text } = useTypewriter({
    words: [props.lines],
    typeSpeed: props.instant ? 2 : 20,
    onLoopDone: () => props.setVisibles(true),
  });

  return (
    <div className={props.xClassName}>
      {props.xSideBefore && <div id="xSideBefore">{props.xSideBefore}</div>}
      <Line
        visibles={props.visibles}
        textProps={text}
        lineProps={props.lines}
        characterNames={props.characterNames}
        linesClassName={props.linesClassName}
      />
      {(props.delayed == 'x' ? props.visibles : true) && (
        <XSideAfter component={props.xSideAfter} />
      )}
    </div>
  );
};

export { Lines } 