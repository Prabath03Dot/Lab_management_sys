const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    email: String,
    phoneNumber: String,
    testName: String,
    invoiceId: Number,
    startDate:String,
    username: String
});

const User = mongoose.model('user', userSchema);
module.exports = User;
