import _ from 'lodash';
import * as React from 'react';
import { Button } from '../atoms/Button';

interface MultipleChoiceProps {
  code?: number;
  responses: string[];
  onClick?: (arg0: number) => any;
  buttonClass?: string;
  containerClass?: string;
}

export const MultipleChoice = (props: MultipleChoiceProps) => {
  const shuffle = React.useMemo(() => {
    return _.shuffle(
      props.responses.map((text, index) => {
        return (
          <Button
            className={props.buttonClass}
            text={text}
            key={index}
            index={index}
            onClick={(index) => props.onClick && props.onClick(index + 1)}
          />
        );
      })
    );
  }, []);

  return <div className={props.containerClass}>{shuffle}</div>;
};

export default MultipleChoice;
