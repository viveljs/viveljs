import * as React from 'react';

interface DialogueProps {
  text: string[];
  before?: React.ReactNode;
  after?: React.ReactNode;
  index: number;
}

export const Dialogue = (props: DialogueProps) => {
  const Lines = () => {
    return (
      <div>
        {props.before && <div id="before">{props.before}</div>}
        <div id="lines">{props.text[props.index]}</div>
        {props.after && <div id="after">{props.after}</div>}
      </div>
    );
  };

  return (
    <section id="dialogue">
      <Lines />
    </section>
  );
};

export default Dialogue;
