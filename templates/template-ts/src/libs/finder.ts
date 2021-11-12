import _ from 'lodash';
import { stateProxy } from '../stores/game';
import content from '@contentJSON';

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

const sceneFinder = (str: string, object: { [key: string]: any }) => {
  const key = Object.keys(object).find((x) =>
    x.includes(_.capitalize(str) ?? 'default')
  ) as string;

  return {
    custom: key ? true : false,
    value: key
      ? object[key].default
      : (stateProxy.index = content.scenes.indexOf(str)),
  };
};

export { fileArrayFinder, fileFinder, sceneFinder };
