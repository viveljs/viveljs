import * as React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

interface DialogueProps {
  text: string[];
  xSide?: React.ReactNode;
  ySide?: React.ReactNode;
  delayed: 'x' | 'y' | 'none';
  index: number;
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
      typeSpeed: 20,
      onLoopDone: () => setVisibility(true),
    });

    return (
      <div>
        {(props.delayed == 'x' ? visible : true) && props.xSide && (
          <div id="xLines">{props.xSide}</div>
        )}
        <div id="lines">{visible ? line : text}</div>
      </div>
    );
  };

  return (
    <section id="dialogue">
      {(props.delayed == 'y' ? visible : true) && props.ySide && (
        <div id="yLines">{props.ySide}</div>
      )}
      <Lines />
    </section>
  );
};

export default Dialogue;
