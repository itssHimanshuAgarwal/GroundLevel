const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    Name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Message: { type: String },
});

module.exports = mongoose.model('Contact', contactSchema);