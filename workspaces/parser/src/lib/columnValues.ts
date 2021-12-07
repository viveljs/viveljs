import _ from 'lodash';
import { WorkSheet } from 'xlsx';
import { arrayParse } from './arrayParse';
import { characterAliasSplit } from './characterAliasSplit';
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
      if (key == 'Option') return arrayParse(value);
      if (key == 'Value')
        return arrayParse(value, (x: string) =>
          x == '1' || x == 'true' || x == 'True' || x == 'TRUE' ? true : false
        );
      else return value.toString().replace(/\s+$/gm, '');
    });

    return result;
  });

  const mappedObject = Object.keys(changedColumnValues[1]).map((key) => {
    return _.map(changedColumnValues, key);
  });

  const characterSplitted = characterAliasSplit(mappedObject[7]);
  const finalValues = [
    ...characterSplitted,
    mappedObject[2],
    ...mappedObject.slice(4, 7),
    ...mappedObject.slice(9),
  ];

  return finalValues;
};

export { columnValues };
