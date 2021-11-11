import _ from 'lodash';
import { WorkSheet } from 'xlsx';
import { characterMoodSplit } from './characterMoodSplit';
import { componentParse } from './componentParse';

interface JSONProps {
  Character: string;
  Line: string;
  Option: string;
}

const columnValues = (ws: WorkSheet) => {
  const changedColumnKeys: JSONProps[] = ws.map((json: WorkSheet) => {
    const result = _.mapKeys(json, (_value, key) => {
      return key.replace(/(\(s\))/gm, '');
    });

    return result;
  });

  const changedColumnValues = changedColumnKeys.map((key) => {
    const result = _.mapValues(key, (value, key) => {
      if (key == 'Character') return value.replace(/\s+/gm, '');
      if (key == 'Component') return componentParse(value);
      else return value.replace(/\s+$/gm, '');
    });

    return result;
  });

  const mappedObject = Object.keys(changedColumnValues[1]).map((key) => {
    return _.map(changedColumnValues, key);
  });

  const characterSplitted = characterMoodSplit(mappedObject[1]);
  const finalValues = [
    ...characterSplitted,
    mappedObject[0],
    ...mappedObject.slice(2),
  ];

  return finalValues;
};

export { columnValues };
