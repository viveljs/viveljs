import _ from 'lodash';

const componentParse = (value: string) => {
  const pascalCase = _.flow(_.camelCase, _.upperFirst);
  return value.length == 0 ? _.capitalize('button') : pascalCase(value);
};

export { componentParse };
