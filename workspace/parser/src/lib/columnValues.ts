import { WorkSheet } from 'xlsx';
import { characterMoodSplit } from './characterMoodSplit';

const columnValues = (ws: WorkSheet, column: string[]) => {
  const tempArray = column.map((col, index) => {
    const keys = Object.keys(ws).filter((key) => key.includes(col));
    const basicArray: string[] = keys.map((key) =>
      index === 0
        ? ws[key].v.replace(/\s+/gm, '')
        : ws[key].v.replace(/\s+$/gm, '')
    );

    return basicArray.slice(1);
  });

  const characterSplitted = characterMoodSplit(tempArray[0]);

  const finalValues = [...characterSplitted, ...tempArray.slice(1)];

  return finalValues;
};

export { columnValues };
