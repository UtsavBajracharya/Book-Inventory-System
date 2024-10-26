const Book = require('../models/book');

const { Op } = require('sequelize');

const { Parser } = require('json2csv');

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, genre, publication_date, isbn } = req.body;
  try {
    const book = await Book.create({ title, author, genre, publication_date, isbn });
    res.json(book);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'ISBN must be unique', error });
    } else {
      res.status(500).json({ message: 'Error adding book', error  });
    }
  }
};

// Get all books and filter books by title, author, or genre
exports.getBooks = async (req, res) => {
  const { title, author, genre, publication_date } = req.query;

  // Conditions for filtering books
  const where = {};

  if (title) {
    where.title = { [Op.like]: `%${title}%` };
  }
  if (author) {
    where.author = { [Op.like]: `%${author}%` };
  }
  if (genre) {
    where.genre = { [Op.like]: `%${genre}%` };
  }
  if (publication_date) {
    where.publication_date = publication_date; 
  }

    try {
      const books = await Book.findAll( { where } );
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);  // Log the error to debug
      res.status(500).json({ message: 'Error fetching books', error });
    }
  };

// Export books to CSV or JSON
exports.exportBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ 
      attributes: ['id', 'title', 'author', 'genre', 'publication_date', 'isbn'],
      raw: true 
    });

    if (req.query.format === 'csv') {
      // Convert JSON data to CSV
      const fields = ['id', 'title', 'author', 'genre', 'publication_date', 'isbn'];

      // Create a new Parser instance with the specified fields
      const json2csvParser = new Parser({ fields });
      
      const csv = json2csvParser.parse(books);

      res.header('Content-Type', 'text/csv');
      res.attachment('books.csv');
      return res.send(csv);

    } else if (req.query.format === 'json') {
      const formattedJson = JSON.stringify(books, null, 4); // Pretty print JSON with 4 spaces for indentation
      // Send JSON data
      res.header('Content-Type', 'application/json');

      res.attachment('books.json'); // Csv file name
      return res.send(formattedJson);
    } else {
      return res.status(400).json({ message: 'Invalid format specified' });
    }
  } catch (error) {
    console.error('Error exporting books:', error);
    res.status(500).json({ message: 'Error exporting books', error });
  }
};
