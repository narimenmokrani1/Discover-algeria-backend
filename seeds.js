const mongoose = require('./connection');
const seedData = require('./seeds.json');
const State = require('./models/State');

State.deleteMany({})
	.then(() => {
		State.insertMany(seedData).then((states) => {
			console.log('We have a state');
			console.log(states);
			process.exit();
		});
	})
	.catch((err) => console.error(err));

// Photo's used for the plants are from thespruce.com
