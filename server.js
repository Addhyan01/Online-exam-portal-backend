require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const autoRoutes = require('./routes/autoRoutes');
const courseRoutes = require('./routes/courseRoutes');
const examRoutes = require('./routes/examRoutes');
const certificateRoutes = require('./routes/certificateRoutes');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/autos', autoRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/certificate', certificateRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));