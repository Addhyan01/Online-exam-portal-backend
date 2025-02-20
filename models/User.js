const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: string, require: true},
    password: string,
});

module.exports = mongoose.model('User', UserSchema);