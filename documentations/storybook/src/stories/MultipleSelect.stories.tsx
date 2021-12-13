import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { MultipleSelect } from '../../../../workspaces/ui/src';
import { multipleResult } from '../../../../workspaces/ui/src/libs/multipleResults';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import styles from './styles/multipleSelect.module.css';
import buttonStyle from './styles/button.module.css';
const responses = ['Is it ?', 'Who did it ?', 'Why ?', 'When ?'];

export default {
  title: "Components/Multiple Select",
  component: MultipleSelect,
}as ComponentMeta<typeof MultipleSelect>;

export const Bare: ComponentStory<typeof MultipleSelect> = () => {
  const [values, setValues] = React.useState<string[]>([]);
  const [answers] = useValue<string[]>('responses', {
    defaultValue: responses,
  });

  return (
    <div>
      <MultipleSelect
        responses={answers}
        buttonClass={buttonStyle.button}
        answerNormal={styles.answersNormal}
        answerActive={styles.answersActive}
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