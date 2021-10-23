import fs from 'fs';

const write = (content: string, file: string) => {
  fs.writeFile(`${file}.json`, content, (err) => {
    if (err) console.log(err);
    console.log(`Parsed to ${file}.json`);
  });
};

export { write };
