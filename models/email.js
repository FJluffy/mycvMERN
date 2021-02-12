const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const emailSchema = new Schema({
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    message: { type: String, required: true, unique: false }
}, { timestamps: true, })

const Email = mongoose.model("Email", emailSchema);
module.exports = Email;