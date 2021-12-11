import _ from 'lodash';
import { stateProxy } from '../stores/game';
import content from '@contentJSON';

interface sceneFinderProps {
  custom: boolean;
  value: string;
}

const fileArrayFinder = (array: string[], object: { [key: string]: any }) => {
  const result = array.map((value) => {
    const key = Object.keys(object).find((x) =>
      x.includes(value ?? 'default')
    ) as string;
    return object[key].default;
  });

  return result;
};

const fileFinder = (str: string, object: { [key: string]: any }) => {
  const key = Object.keys(object).find((x) =>
    x.includes(_.capitalize(str) ?? 'default')
  ) as string;

  return object[key].default;
};

const sceneFinder = (
  str: string,
  object: { [key: string]: any },
  index: number
): sceneFinderProps => {
  const key = Object.keys(object).find((x) => {
    if (content.sceneTypes[index].length > 0)
      return x.includes(content.sceneTypes[index]);
    return x.includes(_.capitalize(str) ?? 'default');
  });

  return {
    custom: key ? true : false,
    value: key
      ? object[key].default
      : (stateProxy.index = content.scenes.indexOf(str)),
  };
};

export { fileArrayFinder, fileFinder, sceneFinder };
export type { sceneFinderProps };
