const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    day: Date,
    exercises: Array
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;