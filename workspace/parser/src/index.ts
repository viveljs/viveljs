import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const parser = yargs(hideBin(process.argv)).options({
  ships: { type: 'number', default: 0 },
});

const main = async () => {
  const argv = await parser.argv;

  if (argv.ships > 3) {
    console.log('woah');
  } else {
    console.log('test');
  }
};

main();
