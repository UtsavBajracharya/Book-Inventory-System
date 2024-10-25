const express = require('express');

const router = express.Router();

const { addBook, getBooks, filterBooks, exportBooks } = require('../controllers/bookController');

router.post('/', addBook);

router.get('/', getBooks);

router.get('/filter', filterBooks);

router.get('/export', exportBooks);

module.exports = router;
