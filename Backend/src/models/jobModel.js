const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    location: { type: String },
    salary: { type: String },
    datePosted: { type: Date, default: Date.now }
},{ timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
