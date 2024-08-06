const { readCSV } = require('./csv-reader.js');

const parseData = async () => {
  try {
    const cities = await readCSV();
    return cities.map((city) => ({
      name: city.name,
      country: city.country,
      mayor: city.mayor,
    }));
  } catch (error) {
    console.error('Error parsing data:', error);
    return [];
  }
};

const searchCities = async (searchTerm) => {
  const cities = await parseData();
  return cities.filter((city) => {
    const name = city.name.toLowerCase();
    const country = city.country.toLowerCase();
    const mayor = city.mayor.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    return name.includes(searchTermLower) || country.includes(searchTermLower) || mayor.includes(searchTermLower);
  });
};

module.exports = { parseData, searchCities };