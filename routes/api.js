const router = require("express").Router();
const workout = require("../models/workout.js");

// POST
// PUT
// 2 GET requests

router.get("/api/workouts", function (req, res) {
  workout.find({}).sort({day:-1}).then((workouts) => res.json(workouts));
});
router.get("/api/workouts/range", function (req, res) {
  workout.find({day:{$gte:new Date().setDate(new Date().getDate()-7)}}).sort({day:-1}).then((workouts) => res.json(workouts));
});

router.post("/api/workouts", function (req, res) {
  workout.create(req.body).then((newWorkout) => res.json(newWorkout));
});

router.put("/api/workouts/:id", function (req, res) {
  workout
    .findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((workout) => res.json(workout));
});

router.get("/api/waitlist", function (req, res) {
  res.json(waitListData);
});

module.exports = router;
