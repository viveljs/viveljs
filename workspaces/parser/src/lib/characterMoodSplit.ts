import _ from 'lodash';

const lowerCaseMap = (array: string[]) => array.map((str) => _.lowerCase(str));

const characterMoodSplit = (values: string[]) => {
  const characters = values.map((value) => {
    const characterArray = value.replace(/(\w+)\(\w+\)/g, '$1').split(',');
    const sanitizedArray = _.compact(characterArray);
    return lowerCaseMap(sanitizedArray);
  });

  const moods = values.map((value) => {
    const moodArray = value.replace(/\w+\((\w+)\)/g, '$1').split(',');
    const sanitizedArray = _.compact(moodArray);
    return lowerCaseMap(sanitizedArray);
  });

  return [characters, moods];
};

export { characterMoodSplit };
