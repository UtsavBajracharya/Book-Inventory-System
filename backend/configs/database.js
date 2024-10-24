const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('book_inventory', 'root', '122111', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
