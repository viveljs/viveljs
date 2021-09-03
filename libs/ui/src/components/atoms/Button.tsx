import * as React from 'react';
import { capitalize } from 'lodash';

interface ButtonProps {
  text: string;
  onClick?: (arg0: number, arg1?: string) => any;
  className?: string;
  index?: number;
}

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    props.onClick && props.onClick(props.index as number, props.text);
  };
  return (
    <button
      onClick={handleClick}
      id={`button-${props.index}`}
      className={props.className}
    >
      {capitalize(props.text)}
    </button>
  );
};

export default Button;
