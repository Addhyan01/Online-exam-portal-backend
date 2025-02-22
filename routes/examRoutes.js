const express = require('express');
const {getExams, createExam, getExamById } = require('../controllers/examController') 
const router = express.Router();

router.get("/:courseId", getExams);
router.get("/exam/:examId", getExamById);
router.post("/", createExam);

module.exports = router