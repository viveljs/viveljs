import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import xlsx from 'xlsx';
import { columnValues } from './lib';
import { writeContent, write } from './fs';

const parser = yargs(hideBin(process.argv)).options({
  file: { type: 'string' },
  fields: { type: 'array', default: [] },
  output: { type: 'string' },
});

const main = async () => {
  const argv = await parser.argv;
  const keys = [
    'scene',
    'sceneType',
    'background',
    'bgm',
    'character',
    'characterFlow',
    'alias',
    'mood',
    'line',
    'component',
    'series',
    'item',
    'option',
    'value',
    'code',
    'tempVar',
    'sfx',
    'formula',
    'to',
    ...argv.fields,
  ];

  if (argv.file) {
    const wb = xlsx.readFile(argv.file, { sheetStubs: true });
    const value = Object.values(wb.SheetNames).map((sheet) => {
      const jsonValues = xlsx.utils.sheet_to_json<[]>(wb.Sheets[sheet], {
        defval: '',
        range: 1,
      });

      const values = columnValues(jsonValues);
      return values;
    });

    const result = writeContent(keys, value[0]);
    write(result, argv.output ?? 'content');
  } else {
    console.log('No file included');
  }
};

main();

export default main;
