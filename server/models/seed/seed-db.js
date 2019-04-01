'use strict';

const models = require('../db');
const _USERS = require('./users.json');
const _BOOKS = require('./books.json');

module.exports = {
	insert: async () => {
		try {
			await models.User.bulkCreate(_USERS);
			await models.Book.bulkCreate(_BOOKS);
			console.info('Success adding users and books');
		} catch (error) {
			console.warn(error);
		}
	}
};
