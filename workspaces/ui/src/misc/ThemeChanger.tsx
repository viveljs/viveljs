import * as React from 'react';
import _ from 'lodash';
import { useAtom } from 'jotai';
import { Button } from '@viveljs/ui';

import { globalStateAtom } from '@stores/game';
import themes from '@themeJSON';

interface ThemeChangerProps {
  className: string;
  buttonClass: string;
}

const ThemeChanger = (props: ThemeChangerProps) => {
  const [state, setState] = useAtom(globalStateAtom);

  const handleClick = (value: string) => {
    setState({ ...state, theme: value });
  };

  const objectMap = (value: string, index: number) => {
    const th: { [key: string]: any } = themes;
    return (
      <Button
        className={props.buttonClass}
        key={index}
        text={value}
        onClick={() => handleClick(value)}
        style={{
          backgroundColor: th[value]['button-color'],
          color: th[value]['button-text-color'],
        }}
      />
    );
  };

  return (
    <div className={props.className}>
      {_.map(Object.keys(themes), objectMap)}
    </div>
  );
};

export { ThemeChanger };
