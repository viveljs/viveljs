import content from '@contentJSON';
import _ from 'lodash';
import { stateProxy } from '../stores/game';

const buttonHandleClick = (scene?: string, nextScene: boolean = true) => {
  if (scene) {
    stateProxy.scene = _.lowerCase(scene);
  }
  if (
    nextScene &&
    stateProxy.index < content.lines.length - 1 &&
    content.tos[stateProxy.index].length == 0
  ) {
    ++stateProxy.index;
  }
  if (stateProxy.index == content.lines.length - 1) {
    stateProxy.scene = 'ending';
    stateProxy.index = 0;
  }
};

export { buttonHandleClick };
