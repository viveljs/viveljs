import _ from 'lodash';

const lowerCaseMap = (array: string[]) => array.map((str) => str.toLowerCase());

const characterFlowSplit = (values: string[], additionalValues: string[]) => {
  const characterArray = values.map((value) => {
    const sanitizedArray = _.compact(value);
    return lowerCaseMap(sanitizedArray);
  });

  const moodArray = additionalValues.map((value) => {
    const sanitizedArray = _.compact(value);
    return lowerCaseMap(sanitizedArray);
  });

  const characters = _.uniq(characterArray.flat());

  const charactersSlashMoodArray = characterArray.map((array, index) =>
    array.map(
      (value, valueIndex) =>
        `${value}/${moodArray[index][valueIndex] ?? 'normal'}`
    )
  );

  const characterSlashMood = _.uniq(charactersSlashMoodArray.flat());

  const characterFlow = charactersSlashMoodArray.map((array) =>
    array.map((value) => characterSlashMood.indexOf(value))
  );

  return [characters, characterSlashMood, characterFlow];
};

export { characterFlowSplit };
