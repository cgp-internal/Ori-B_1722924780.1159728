const { readCSV } = require('./csv-reader.js');
const { parseData, searchCities } = require('./data-parser.js');

let citiesData = [];

const loadData = async () => {
  try {
    citiesData = await parseData();
  } catch (error) {
    console.error('Error loading data:', error);
  }
};

const saveData = async (newData) => {
  try {
    const csvContent = newData.map((city) => `${city.name},${city.country},${city.mayor}`).join('\n');
    await fs.promises.writeFile('cities.csv', csvContent);
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

const searchCitiesWrapper = async (searchTerm) => {
  try {
    const results = await searchCities(searchTerm);
    return results;
  } catch (error) {
    console.error('Error searching cities:', error);
    return [];
  }
};

module.exports = { loadData, saveData, searchCities: searchCitiesWrapper };