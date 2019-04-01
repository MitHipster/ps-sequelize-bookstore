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
	console.log(req.params.id);
	try {
		const user = await models.User.findByPk(req.params.id);
		res.json(user);
	} catch (error) {
		res.status(404).send(error);
	}
};
