import * as React from 'react';

import { Button } from '@viveljs/ui';
import { buttonHandleClick } from '../libs/buttonHandleClick';

const Iklan = () => {
  return (
    <Button onClick={() => buttonHandleClick('default', true)} text="test" />
  );
};

export default Iklan;
