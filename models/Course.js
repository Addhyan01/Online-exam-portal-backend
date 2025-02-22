const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: String,
    createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', CourseSchema);