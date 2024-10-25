const express = require('express');

const router = express.Router();

const { addBook, getBooks, exportBooks } = require('../controllers/bookController');

router.post('/', addBook);

router.get('/', getBooks);

router.get('/export', exportBooks);

module.exports = router;
