const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true }, 
    title: { type: String, required: true },
    question: [
        {
            question: String,
            options: [String],
            correctAnswer: String,
        }
    ],

    passingScore: { type: Number, default: 60 }

});

module.exports = mongoose.model("Exam", ExamSchema);