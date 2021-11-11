import _ from 'lodash';

const fileArrayFinder = (array: string[], object: { [key: string]: any }) => {
  const result = array.map((value) => {
    const key = Object.keys(object).find((x) =>
      x.includes(value ?? 'default')
    ) as string;
    return object[key].default;
  });

  return result;
};

const fileFinder = (str: string, object: { [key: string]: any }) => {
  const key = Object.keys(object).find((x) =>
    x.includes(_.capitalize(str) ?? 'default')
  ) as string;
  return object[key].default;
};

export { fileArrayFinder, fileFinder };
