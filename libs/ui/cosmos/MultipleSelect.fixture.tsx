import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { MultipleSelect } from '../src/components';
import { multipleResult } from '../src/components/libs/multipleResults';

import styles from './styles/multipleSelect.module.css';
import buttonStyle from './styles/button.module.css';
const responses = ['Is it ?', 'Who did it ?', 'Why ?', 'When ?'];

const Bare = () => {
  const [values, setValues] = React.useState<string[]>([]);
  const [answers] = useValue<string[]>('responses', {
    defaultValue: responses,
  });

  return (
    <div>
      <MultipleSelect
        responses={answers}
        buttonClass={buttonStyle.button}
        answerClass={styles.answers}
        columns="auto auto"
        and="and"
        onClick={(index) => setValues(index)}
      />
      <div className={styles.text}>
        You choose options {multipleResult(values, 'and')}
      </div>
    </div>
  );
};

export default {
  Bare: <Bare />,
};
