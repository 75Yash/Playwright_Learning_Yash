import fs from 'fs';
import csv from 'csv-parser';

function readCSV(filePath: string): Promise<Array<Record<string, string>>> {
  return new Promise((resolve) => {
    const results: Array<Record<string, string>> = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      });
  });
}

export default readCSV;
