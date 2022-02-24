const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    testlabName : String,
    subsPlan: String,
    address: String,
    email: String,
    phoneNumber: String
});

const Company = mongoose.model('company', companySchema);
module.exports = Company;
