'use strict';

const models = require('../../models/db');

exports.allBooks = async (req, res) => {
	try {
		const books = await models.Book.findAll();
		res.json(books);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.saveUserBook = async (req, res) => {
	const { bookId, userId } = req.body;

	try {
		const book = await models.Book.findByPk(bookId);
		await book.addReader(userId);
		res.json({ success: 'Book was added to list.' });
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.addBook = async (req, res) => {
	const { title, author, year } = req.body;

	try {
		const book = await models.Book.create({
			title,
			author,
			year
		});
		res.json(book);
	} catch (error) {
		res.status(404).send(error);
	}
};
