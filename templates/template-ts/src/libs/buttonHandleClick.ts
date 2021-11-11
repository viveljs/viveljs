import content from '@contentJSON';
import { stateProxy } from '../stores/game';

const buttonHandleClick = (scene?: any, nextScene?: any) => {
  if (scene) {
    stateProxy.type = scene;
  }
  if (nextScene) {
    ++stateProxy.index;
  }
  if (
    stateProxy.index < content.lines.length - 1 &&
    content.tos[stateProxy.index].length == 0
  ) {
    ++stateProxy.index;
  } else {
    stateProxy.type = 'ending';
    stateProxy.index = 0;
  }
};

export { buttonHandleClick };
