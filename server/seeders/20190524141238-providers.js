'use strict';
const csv = require('csv-parser');
const fs = require('fs');

const loadData = () => new Promise((resolve) => {
  const results = [];
  fs.createReadStream('./seeders/providers.csv')
      .pipe(csv())
      .on('data', (data) => results.push({
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      .on('end', () => {
        resolve(results);
      });
});

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const results = await loadData();
    return queryInterface.bulkInsert('providers', results, {});
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('providers', null, {});
  }
};
