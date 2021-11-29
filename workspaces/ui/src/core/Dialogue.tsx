import * as React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { XSideAfter } from '../atoms/XSideAfter';
import { YSide } from '../atoms/Yside';
import { Line } from '../atoms/Line';

interface DialogueProps {
  text: string[];
  delayed: 'x' | 'y' | 'none';
  index: number;
  characterNames?: React.ReactNode;
  and?: string;
  xSideBefore?: React.ReactNode;
  xSideAfter?: React.ReactNode;
  ySide?: React.ReactNode;
  dialogueClassName?: string;
  linesClassName?: string;
  xClassName?: string;
  yClassName?: string;
  instant?: boolean;
}

export const Dialogue = (props: DialogueProps) => {
  const [visible, setVisibility] = React.useState<boolean>(false);

  const line = props.text[props.index];

  React.useEffect(() => {
    setVisibility(false);
  }, [line]);

  const Lines = () => {
    const { text } = useTypewriter({
      words: [line],
      typeSpeed: props.instant ? 2 : 20,
      onLoopDone: () => setVisibility(true),
    });

    return (
      <div className={props.xClassName}>
        {props.xSideBefore && <div id="xSideBefore">{props.xSideBefore}</div>}
        <Line
          visibles={visible}
          textProps={text}
          lineProps={line}
          characterNames={props.characterNames}
          linesClassName={props.linesClassName}
        />
        {(props.delayed == 'x' ? visible : true) && (
          <XSideAfter component={props.xSideAfter} />
        )}
      </div>
    );
  };

  if (props.index <= props.text.length - 1)
    return (
      <section id="dialogue" className={props.dialogueClassName}>
        {(props.delayed == 'y' ? visible : true) && (
          <YSide component={props.ySide} yClassName={props.yClassName} />
        )}
        <Lines />
      </section>
    );
  return <div className="error">Dialogue Index Out of Bound</div>;
};
