const mongoose = require('../connection');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
	state: String,
	image_url: String,
	state_code: Number,
	traditional_clothes: String,
	clothes_url: String,
	traditional_food: String,
	food_url: String,
	hotel: String,
	favorite: Boolean,
	region: String,
	description: String,
	places_to_visit: [
		{ name: String, img_url: String },

	],
});

const State = mongoose.model('State', StateSchema);

module.exports = State;
