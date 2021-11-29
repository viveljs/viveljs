import * as React from 'react';

interface lineProps {
  textProps: any;
  characterNames?: React.ReactNode;
  linesClassName?: string;
  visibles?: boolean 
  lineProps: any
}


const Line = (props: lineProps) => {
  
    if (props.characterNames)
      return (
        <div>
          {props.characterNames}
          <div id="lines" className={props.linesClassName}>
            {props.visibles ? props.lineProps : props.textProps}
          </div>
        </div>
      );
    return (
      <div id="lines" className={props.linesClassName}>
        {props.visibles ? props.lineProps : props.textProps}
      </div>
    );
  
};

export { Line }

