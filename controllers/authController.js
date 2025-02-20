const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({message: 'User Register'});
    }
    catch(error) {
        res.status(400).json({ message : error.message });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if( !user ) return res.status(404).json({ message: "Invalid Credentials"});

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({message: "Invalid Credentials"});

    const token = jwt.sign({id: user._id, name: user.name}, process.env.JWT_SECRET, { expiresIn: "6h" });
    res.json({ token });


};







