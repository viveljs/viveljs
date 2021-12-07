import _ from 'lodash';

const lowerCaseMap = (array: string[]) => array.map((str) => _.lowerCase(str));

const characterAliasSplit = (values: string[]) => {
  const characterArray = values.map((value) => {
    const array = value.replace(/(\w+)\(\w+\)/g, '$1').split(',');
    const sanitizedArray = _.compact(array);
    return lowerCaseMap(sanitizedArray);
  });

  const characters = _.uniq(characterArray.flat());
  const characterFlow = characterArray.map((array) =>
    array.map((value) => characters.indexOf(value))
  );

  const alias = values.map((value) => {
    const aliasArray = value.replace(/\w+\s?\((\S+)\)/g, '$1').split(',');
    const sanitizedArray = _.compact(aliasArray);
    return lowerCaseMap(sanitizedArray);
  });

  return [characters, characterFlow, alias];
};

export { characterAliasSplit };
