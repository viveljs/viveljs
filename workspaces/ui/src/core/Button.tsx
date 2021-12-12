import * as React from 'react';
import { capitalize } from 'lodash';

interface ButtonProps {
  text: string;
  onClick?: (arg0: number, arg1?: string) => any;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    props.onClick && props.onClick(props.index as number, props.text);
  };
  return (
    <button
      style={props.style}
      onClick={handleClick}
      id={`button-${props.index}`}
      className={props.className}
    >
      {capitalize(props.text)}
    </button>
  );
};
