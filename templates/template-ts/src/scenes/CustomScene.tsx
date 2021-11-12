import * as React from 'react';
import { buttonHandleClick } from '../libs/buttonHandleClick';

import { Button } from '@viveljs/ui';

const CustomScene = () => {
  return <Button onClick={() => buttonHandleClick('default')} text="test" />;
};

export default CustomScene;
