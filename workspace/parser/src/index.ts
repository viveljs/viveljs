import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import xlsx from 'xlsx';
import { columnIndex, columnValues } from './lib';
import { write } from './fs/write';

const parser = yargs(hideBin(process.argv)).options({
  file: { type: 'string' },
  fields: { type: 'array', default: [] },
  output: { type: 'string' },
});

const main = async () => {
  const argv = await parser.argv;
  const keys = ['character', 'line', 'path', ...argv.fields];
  if (argv.file) {
    const wb = xlsx.readFile(argv.file);
    const value = Object.values(wb.Sheets).map((sheet) => {
      const indexes = columnIndex(sheet, keys);
      const values = columnValues(sheet, indexes);
      return values;
    });
    const result = write(keys, value[0]);
    console.log(result);
    console.log(value[0]);
  } else {
    console.log('No file included');
  }
};

main();

export default main;
