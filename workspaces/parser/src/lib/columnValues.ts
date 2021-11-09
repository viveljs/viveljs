import _ from 'lodash';
import { WorkSheet } from 'xlsx';
import { characterMoodSplit } from './characterMoodSplit';

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
      return key == 'Character'
        ? value.replace(/\s+/gm, '')
        : value.replace(/\s+$/gm, '');
    });

    return result;
  });

  const mappedObject = Object.keys(changedColumnValues[0]).map((key) => {
    return _.map(changedColumnValues, key);
  });

  const characterSplitted = characterMoodSplit(mappedObject[0]);
  const finalValues = [...characterSplitted, ...mappedObject.slice(1)];

  return finalValues;
};

export { columnValues };
