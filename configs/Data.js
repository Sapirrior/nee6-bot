const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    premium: { type: boolean, default: false},
    bal: { type: Number, default: 0 }
});
module.exports = mongoose.model('Data', userSchema);