import * as React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

interface DialogueProps {
  text: string[];
  delayed: 'x' | 'y' | 'none';
  index: number;
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
        <div id="lines" className={props.linesClassName}>
          {visible ? line : text}
        </div>
        {(props.delayed == 'x' ? visible : true) && props.xSideAfter && (
          <div id="xSideAfter">{props.xSideAfter}</div>
        )}
      </div>
    );
  };

  if (props.index <= props.text.length - 1)
    return (
      <section id="dialogue" className={props.dialogueClassName}>
        {(props.delayed == 'y' ? visible : true) && props.ySide && (
          <div id="yLines" className={props.yClassName}>
            {props.ySide}
          </div>
        )}
        <Lines />
      </section>
    );
  return <div className="error">Dialogue Index Out of Bound</div>;
};

export default Dialogue;
