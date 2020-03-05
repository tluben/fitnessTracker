const router = require("express").Router()
const Fitness = require("../models/Fitness")

router.get("/api/workouts", (req, res) => {
    Fitness.find()
    .then(dbResponse => res.json(dbResponse))
    .catch(err => res.json(err));
 })

//Post
router.post("/api/workouts", (req, res) => {
    Fitness.create({})
        .then(dbResponse => res.json(dbResponse))
        .catch(err => res.json(err));
})

router.put("/api/workouts/:id", (req, res) => {
    Fitness.findByIdAndUpdate(
        req.params.id, 
        {$push:{exercises:req.body}}
    )
    .then(dbResponse => res.json(dbResponse))
    .catch(err => res.json(err));
}) 

router.get("/api/workouts/range", (req, res) => {
    Fitness.find()
    .then(dbResponse => res.json(dbResponse))
    .catch(err => res.json(err));
 })

module.exports = router