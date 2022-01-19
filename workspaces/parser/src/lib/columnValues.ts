import _ from 'lodash';
import { WorkSheet } from 'xlsx';
import { arrayParse } from './arrayParse';
import { characterFlowSplit } from './characterFlowSplit';
import { componentParse } from './componentParse';

interface JSONProps {
  Character: string;
  Line: string;
  Option: string;
}

const parseToBoolean = (x: string) => {
  if (x.length > 0)
    return x == '1' || x == 'true' || x == 'True' || x == 'TRUE' ? true : false;
  return undefined;
};

const columnValues = (ws: WorkSheet) => {
  const changedColumnKeys: JSONProps[] = ws.map((json: WorkSheet) => {
    const result = _.mapKeys(json, (_value, key) => {
      return key.replace(/(\(s\))/gm, '');
    });

    return result;
  });

  const changedColumnValues = changedColumnKeys.map((key) => {
    const result = _.mapValues(key, (value, key) => {
      if (key == 'Component') return componentParse(value);
      if (key == 'Character') return arrayParse(value.replace(/\s+/gm, ''));
      if (key == 'Option') return arrayParse(value);
      if (key == 'Alias') return arrayParse(value.replace(/\s+/gm, ''));
      if (key == 'Mood') return arrayParse(value.replace(/\s+/gm, ''));
      if (key == 'Item' || key == 'Additional Item')
        return arrayParse(value.replace(/\s+/gm, ''));
      if (key == 'Next Scene') return arrayParse(value);
      if (key == 'Value')
        return arrayParse(value, (x: string) => parseToBoolean(x));
      else return value.toString().replace(/\s+$/gm, '');
    });

    return result;
  });

  const mappedObject = Object.keys(changedColumnValues[1]).map((key) => {
    return _.map(changedColumnValues, key);
  });

  const characterSplitted = characterFlowSplit(
    mappedObject[7],
    mappedObject[9]
  );
  const finalValues = [
    mappedObject[2],
    ...mappedObject.slice(4, 7),
    ...characterSplitted,
    ...mappedObject.slice(8),
  ];

  return finalValues;
};

export { columnValues };
