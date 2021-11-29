import * as React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import { XSideAfter } from '../atoms/XSideAfter';
import { YSide } from '../atoms/Yside';
import { Line } from '../atoms/Line';
import { Lines } from '../atoms/Lines'

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

  if (props.index <= props.text.length - 1)
    return (
      <section id="dialogue" className={props.dialogueClassName}>
        {(props.delayed == 'y' ? visible : true) && (
          <YSide component={props.ySide} yClassName={props.yClassName} />
        )}
        <Lines 
          delayed={props.delayed}
          characterNames={props.characterNames}
          xSideAfter={props.xSideAfter}
          xSideBefore={props.xSideBefore}
          linesClassName={props.linesClassName}
          xClassName={props.xClassName}
          instant={props.instant}
          visibles={visible}
          setVisibles={setVisibility}
          lines={line}
        />
      </section>
    );
  return <div className="error">Dialogue Index Out of Bound</div>;
};
