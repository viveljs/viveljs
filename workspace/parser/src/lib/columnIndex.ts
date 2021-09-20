import { WorkSheet } from 'xlsx';
import _ from 'lodash';

const columnIndex = (ws: WorkSheet, fields: string[]) => {
  const indexes = fields.map((field) => {
    const index = Object.keys(ws).filter(
      (key) => ws[key].v && ws[key].v.includes(_.capitalize(field))
    );

    const sanitized = index[0] && index[0].replace(/\d+/g, '');

    return sanitized;
  });

  return _.compact(indexes);
};

export { columnIndex };
