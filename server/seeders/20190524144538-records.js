'use strict';
const csv = require('csv-parser');
const fs = require('fs');

const loadData = () => new Promise((resolve) => {
  const results = [];
  fs.createReadStream('./seeders/records.csv')
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

/**
 * Inserts the data into the db using batches
 *
 * @param queryInterface
 * @param results
 * @returns {Promise<any>}
 */
const bulkData = (queryInterface, results) => {
    const a = [...results]; // Copy the array so we don't affect the original one
    const inserts = [];
    while(a.length) {
        const batch = a.splice(0, 100);
        inserts.push(queryInterface.bulkInsert('records', batch, {}));
    }

    return Promise.all(inserts);
};

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
    return bulkData(queryInterface, results);
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('records', null, {});
  }
};
