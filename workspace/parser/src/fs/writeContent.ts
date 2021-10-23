import _ from 'lodash';
import plur from 'plur';

const writeContent = (keys: string[], values: any[]) => {
  const pluralKeys = keys.map((key) => {
    return plur(key, 2);
  });

  const createObject = _.zipObject(pluralKeys, values);

  const result = JSON.stringify(createObject, null, 2);

  return result;
};

export { writeContent };
