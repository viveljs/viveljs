import * as React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { XSideAfter } from '../atoms/XSideAfter';

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

  const YSide = () => {
    if (props.ySide)
      return (
        <div id="yLines" className={props.yClassName}>
          {props.ySide}
        </div>
      );
    return null;
  };

  const Lines = () => {
    const { text } = useTypewriter({
      words: [line],
      typeSpeed: props.instant ? 2 : 20,
      onLoopDone: () => setVisibility(true),
    });

    return (
      <div className={props.xClassName}>
        {props.xSideBefore && <div id="xSideBefore">{props.xSideBefore}</div>}
        {props.characterNames && <div>{props.characterNames}</div>}
        <div id="lines" className={props.linesClassName}>
          {visible ? line : text}
        </div>
        {(props.delayed == 'x' ? visible : true) && <XSideAfter />}
      </div>
    );
  };

  if (props.index <= props.text.length - 1)
    return (
      <section id="dialogue" className={props.dialogueClassName}>
        {(props.delayed == 'y' ? visible : true) && <YSide />}
        <Lines />
      </section>
    );
  return <div className="error">Dialogue Index Out of Bound</div>;
};

export default Dialogue;
