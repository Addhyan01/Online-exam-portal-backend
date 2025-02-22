const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: String, require: true},
    password: String,
});

module.exports = mongoose.model('User', UserSchema);