'use strict';

const models = require('../../models/db');

exports.allUsers = async (req, res) => {
	try {
		const users = await models.User.findAll();
		res.json(users);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.singleUser = async (req, res) => {
	try {
		const user = await models.User.findByPk(req.params.id, {
			include: [
				{
					model: models.Book,
					as: 'Reading',
					attributes: ['title', 'author']
				},
				{
					model: models.Favorite
				}
			]
		});
		res.json(user);
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.saveUserFav = async (req, res) => {
	const title = req.body.bookTitle;
	const UserId = req.body.userId;

	try {
		await models.Favorite.create({
			title,
			UserId
		});
		res.json({ success: 'Book was saved as favorite.' });
	} catch (error) {
		res.status(404).send(error);
	}
};

exports.saveUser = async (req, res) => {
	const name = req.body.name;

	try {
		const user = await models.User.create({
			name
		});
		res.json(user);
	} catch (error) {
		res.status(404).send(error);
	}
};
