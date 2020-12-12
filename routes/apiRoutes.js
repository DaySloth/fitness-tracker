const db = require("../models");

module.exports = (app) => {
    app.get('/api/workouts', (req, res)=>{
        db.Workout.find({})
        .then(results=>{
            res.json(results);
        })
        .catch(err=>{
            console.log(err)
        });
    });

    app.put('/api/workouts/:id', (req, res)=>{
        db.Workout.findById(req.params.id)
        .then(result=>{
            const dbExerciseArray = result.exercises;
            dbExerciseArray.push(req.body);
            const objToPush = {
                day: Date.now(),
                exercises: dbExerciseArray
            };
            db.Workout.findByIdAndUpdate(req.params.id, objToPush, {new: true})
            .then(result=>{
                console.log(result);
                res.json(result);
            })
            .catch(err=>{
                console.log(err);
            });
        });
    });

    app.post('/api/workouts', (req, res)=>{
        db.Workout.create({})
        .then(result=>{
            res.json(result);
        })
        .catch(err=>{
            console.log(err)
        });
    });

    app.get('/api/workouts/range', (req, res)=>{
        db.Workout.find({})
        .then(results=>{
            res.json(results);
        });
    });
};
