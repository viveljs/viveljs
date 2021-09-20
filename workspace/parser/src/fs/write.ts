import _ from 'lodash';
import plur from 'plur';

const write = (keys: string[], values: any[]) => {
  const pluralKeys = keys.map((key) => {
    return plur(key, 2);
  });

  const result = _.zipObject(pluralKeys, values);

  return result;
};

export { write };
