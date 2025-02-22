const Exam = require('../models/Exam');

exports.getExams = async ( req, res ) => {
    try{
        const exams = await Exam.find({ courseId: req.params.courseId });
        res.json(exams);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.getExamById = async ( req, res ) => {
    try{
        const exam = await Exam.findById(req.params.examId);
        res.json(exam);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.createExam = async ( req, res ) => {
    
    try{
        const { courseId, title, question, passingScore } = req.body;
        const exam = await Exam.create({ courseId, title, question, passingScore });
        res.status(201).json(exam);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};