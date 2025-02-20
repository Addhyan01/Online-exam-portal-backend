const Course = require("../models/Course");

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  

exports.createCourse = async (req, res) => {
    const { title, description } = req.body;
    try {
        const course = await Course.create({ title, description });
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};