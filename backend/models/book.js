const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Book = sequelize.define("Book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
  },
  publication_date: {
    type: DataTypes.DATE,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Book;
