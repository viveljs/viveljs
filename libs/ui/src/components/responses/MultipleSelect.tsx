import * as React from 'react';
import _ from 'lodash';
import Button from '../atoms/Button';
import { multipleResult } from '../libs/multipleResults';

interface MultipleSelectProps {
  responses: string[];
  and: string;
  buttonClass?: string;
  answerActive?: string;
  answerNormal?: string;
  containerClass?: string;
  prefix?: string;
  columns?: string;
  rows?: string;
  gap?: string;
  marginBottom?: string;
  onClick?: (arg0: string[]) => any;
}

interface valueProps {
  text: string;
  checked: boolean;
}

interface stateProps {
  [key: string]: valueProps;
}

export const MultipleSelect = (props: MultipleSelectProps) => {
  const [values, setValues] = React.useState<stateProps>({});

  const handleChange = (index: number, text: string) => {
    setValues({
      ...values,
      [index]: {
        text: text,
        checked: values[index] ? !values[index].checked : true,
      },
    });
  };

  const extractText = () => {
    const texts = Object.values(values).map((value: valueProps) => {
      return value.checked && value.text;
    });
    return _.compact(texts);
  };

  const shuffle = React.useMemo(() => {
    return _.shuffle(
      props.responses.map((response, index) => {
        return { answer: response, index: index };
      })
    );
  }, []);

  return (
    <div className={props.containerClass}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: props.columns ?? 'auto',
          gridTemplateRows: props.rows ?? 'auto',
          gap: props.gap ?? '1rem',
          marginBottom: props.marginBottom ?? '2rem',
        }}
      >
        {shuffle.map((value) => {
          return (
            <button
              key={value.index}
              className={
                values[value.index] && values[value.index].checked
                  ? props.answerActive
                  : props.answerNormal
              }
              onClick={() => handleChange(value.index, value.answer)}
            >
              <span>{value.answer}</span>
            </button>
          );
        })}
      </div>
      <Button
        className={props.buttonClass}
        onClick={() =>
          props.onClick &&
          props.onClick(
            Object.keys(values).filter((value) => values[value].checked == true)
          )
        }
        text={`${props.prefix ? props.prefix : '... '}${multipleResult(
          extractText(),
          props.and
        ).join('')}`}
      />
    </div>
  );
};

export default MultipleSelect;
