import * as React from 'react';
import { MultipleChoice } from '../../../../workspaces/ui/src';
import buttonStyles from './styles/button.module.css';
import styles from './styles/multipleChoice.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const responses = ['You choose options ', 'Who did it ?', 'Why ?'];

export default {
  title: "Components/Multiple Choice",
  component: MultipleChoice,
}as ComponentMeta<typeof MultipleChoice>;

export const Bare: ComponentStory<typeof MultipleChoice> = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleClick = (index: number) => {
    setValue(index);
  };

  return (
    <div>
      <MultipleChoice
        buttonClass={buttonStyles.button}
        containerClass={styles.multiple}
        responses={responses}
        onClick={(x) => {
          handleClick(x);
        }}
      />
      <div className={styles.text}>
        You choose option
        <span
          style={{
            color: `rgba(14, 138, 121, 0.8)`,
            marginLeft: '0.5rem',
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};
