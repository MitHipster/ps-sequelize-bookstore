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
