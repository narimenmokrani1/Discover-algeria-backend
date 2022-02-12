const express = require('express');
const State = require('../models/State');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const state = await State.find({});
		res.json(state);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const state = await State.findById(req.params.id);
		if (state) {
			res.status(200).json(state);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newState = await State.create(req.body);
		res.status(201).json(newState);
	} catch (error) {
		next(error);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const updatedstate = await State.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (updatedstate) {
			const states = await State.find({});
			res.json(states);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

module.exports = router;
