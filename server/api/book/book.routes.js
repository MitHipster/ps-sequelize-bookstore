const controller = require('./book.controller');
const express = require('express');
const router = express.Router();

router.get('/allBooks', controller.allBooks);
router.post('/saveUserBook', controller.saveUserBook);
router.post('/addBook', controller.addBook);

module.exports = router;
