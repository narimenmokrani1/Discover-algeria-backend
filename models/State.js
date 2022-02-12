const mongoose = require('../connection');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
	state: String,
	image_url: String,
	clothes_url: String,
	traditional_food: String,
	food_url: String,
	hotel: String,
	favorite: Boolean,
	region: String,
	description: String,
	places_to_visit: [{ name: String, image_url: String }],
});

const State = mongoose.model('State', StateSchema);

module.exports = State;
