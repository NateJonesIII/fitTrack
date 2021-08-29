// Import express router
const router = require("express").Router();

// Import Mongoose
let mongoose = require("mongoose");

// Import workout model
const db = require("../models/exercise");

// GET Request for getting all workouts
router.get("/api/workouts", (req, res) => {
	db.Regimine.collection.find().then((dbData) => {
			res.json(dbData);
		}).catch((err) => {
			res.json(err);
		});
});

// GET request
router.get("/api/workouts/range", (req, res) => {
	db.Regimine.collection.find({}).then((dbData) => {
			res.json(dbData);
		}).catch((err) => {
			res.json(err);
		});
});

// POST workout
router.post("/api/workouts", ({ body }, res) => {
	db.Regimine.collection.create(body).then((dbData) => {
			res.json(dbData);
		}).catch((err) => {
			res.json(err);
		});
});

// PUT/Update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.Regimine.collection.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then((dbData) => {
			res.json(dbData);
		}).catch((err) => {
			res.json(err);
		});
});

// Export API routes
module.exports = router;