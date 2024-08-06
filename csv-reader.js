const fs = require('fs');
const csv = require('csv-parser');

const readCSV = () => {
  return new Promise((resolve, reject) => {
    const cities = [];
    fs.createReadStream('cities.csv')
      .pipe(csv())
      .on('data', (row) => {
        cities.push(row);
      })
      .on('end', () => {
        resolve(cities);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

module.exports = { readCSV };