import _ from 'lodash';

const lowerCaseMap = (array: string[]) => array.map((str) => _.lowerCase(str));

const characterFlowSplit = (values: string[]) => {
  const characterArray = values.map((value) => {
    const array = value.split('|');
    const sanitizedArray = _.compact(array);
    return lowerCaseMap(sanitizedArray);
  });

  const characters = _.uniq(characterArray.flat());
  const characterFlow = characterArray.map((array) =>
    array.map((value) => characters.indexOf(value))
  );

  return [characters, characterFlow];
};

export { characterFlowSplit };
