import * as React from 'react';
import { capitalize } from 'lodash';
interface ButtonProps {
  text: string;
  dialogue?: boolean;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    props.onClick;
  };

  return (
    <button onClick={handleClick} className="button">
      {capitalize(props.text)}
    </button>
  );
};

export default Button;
