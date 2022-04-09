const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    jobTitle: String,
    jobContent: String,
    
});

const Job = mongoose.model('job', jobSchema);
module.exports = Job;
