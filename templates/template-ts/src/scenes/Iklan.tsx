import * as React from 'react';

import { Button } from '@viveljs/ui';
import { buttonHandleClick } from '../libs/buttonHandleClick';

const Iklan = () => {
  return <Button onClick={() => buttonHandleClick('default')} text="test" />;
};

export default Iklan;
