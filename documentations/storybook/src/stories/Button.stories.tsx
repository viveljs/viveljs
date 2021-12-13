import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Button } from '../../../../workspaces/ui/src';
import styles from './styles/button.module.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "Components/Button",
  component: Button,
}as ComponentMeta<typeof Button>;

export const ButtonFixture: ComponentStory<typeof Button> = () => {
  const [text] = useValue('text', { defaultValue: 'next' });
  return <Button text={text} className={styles.button} />;
};

