const express = require('express');
const app = express();
const port = 3000;

const db = require('./server/models/db');

// setup the Express middleware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log('running server on port ' + port);
	});
});
