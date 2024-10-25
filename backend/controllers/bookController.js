const Book = require('../models/book');

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

// Get all books
exports.getBooks = async (req, res) => {
    try {
      const books = await Book.findAll();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching books', error });
    }
  };

// Filter books by title, author, or genre
exports.filterBooks = async (req, res) => {
  const { title, author, genre } = req.query;
  try {
    const books = await Book.findAll({
      where: {
        ...(title && { title }),
        ...(author && { author }),
        ...(genre && { genre })
      }
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error filtering books', error });
  }
};

// Export books to CSV or JSON
exports.exportBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books); // Send data as JSON (or format to CSV)
  } catch (error) {
    res.status(500).json({ message: 'Error exporting books', error });
  }
};
