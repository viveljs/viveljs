import _ from 'lodash';

const lowerCaseMap = (array: string[]) => array.map((str) => _.lowerCase(str));

const characterMoodSplit = (values: string[]) => {
  const characterArray = values.map((value) => {
    const array = value.replace(/(\w+)\(\w+\)/g, '$1').split(',');
    const sanitizedArray = _.compact(array);
    return lowerCaseMap(sanitizedArray);
  });

  const characters = _.uniq(characterArray.flat());
  const characterFlow = characterArray.map((array) =>
    array.map((value) => characters.indexOf(value))
  );

  const moods = values.map((value) => {
    const moodArray = value.replace(/\w+\((\w+)\)/g, '$1').split(',');
    const sanitizedArray = _.compact(moodArray);
    return lowerCaseMap(sanitizedArray);
  });

  return [characters, characterFlow, moods];
};

export { characterMoodSplit };
