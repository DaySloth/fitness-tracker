const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: Array
}, {toJSON: {virtuals: true}});

exerciseSchema.virtual("totalDuration").get(function () {
    let totalDuration = this.exercises.reduce((total, exercise)=>{return total + exercise.duration}, 0);
    return totalDuration; 
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;