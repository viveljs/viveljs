import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { Button } from '../../../../workspaces/ui/src';
import styles from './styles/button.module.css';

const ButtonFixture = () => {
  const [text] = useValue('text', { defaultValue: 'next' });
  return <Button text={text} className={styles.button} />;
};

export default ButtonFixture;
