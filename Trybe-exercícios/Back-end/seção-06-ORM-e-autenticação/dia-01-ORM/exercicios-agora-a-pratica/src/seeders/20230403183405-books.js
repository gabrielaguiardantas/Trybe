'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'Punkes 1',
      author: 'Gabriel Aguiar Dantas',
      pageQuantity: 25,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    {
      title: 'Punkes 2',
      author: 'Gabriel Aguiar Dantas',
      pageQuantity: 27,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')  
    },
    {
      title: 'Punkes 3',
      author: 'Gabriel Aguiar Dantas',
      pageQuantity: 30,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {}),
};
