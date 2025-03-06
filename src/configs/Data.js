const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    premium: { type: Boolean, default: false},
    welcome: { type: String, default: 0 },
    antilink: { type: Boolean, default: false},
    antimention: { type: Boolean, default: false}
});
module.exports = mongoose.model('Data', dataSchema);