import * as React from 'react';
import _ from 'lodash';
import Switch from 'react-switch';
import Button from '../atoms/Button';
import { multipleResult } from '../libs/multipleResults';

interface MultipleSelectProps {
  responses: string[];
  and: string;
  buttonClass?: string;
  answerClass?: string;
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
  console.log(values);
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
        {props.responses.map((response, index) => {
          return (
            <label key={index} className={props.answerClass}>
              <Switch
                key={index}
                checked={values[index] ? values[index].checked : false}
                onChange={() => handleChange(index, response)}
              />
              <span>{response}</span>
            </label>
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
