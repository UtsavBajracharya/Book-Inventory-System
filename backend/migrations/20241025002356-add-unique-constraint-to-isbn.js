'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Books', {
      fields: ['isbn'],
      type: 'unique',
      name: 'unique_isbn_constraint'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Books', 'unique_isbn_constraint');
  }
};