const Job = require('../models/jobModel');

class JobController {
    async createJob(req, res) {
        const { title, description, requirements, location, salary } = req.body;

        if (!title || !description || !requirements || !location ||!salary) {
            return res.status(400).json({ message: 'all field required' });
        }
        
        try {
            const job = new Job({
                title,
                description,
                requirements,
                location,
                salary
            });

            await job.save();
            res.status(201).json({ message: 'Job created successfully', job });
        } catch (error) {
            res.status(500).json({ message: 'Error creating job', error });
        }
    }

    async getJobs(req, res) {
        try {
            const jobs = await Job.find({});
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching jobs', error });
        }
    }

    async getJobById(req, res) {
        const { id } = req.params;

        try {
            const job = await Job.findById(id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json(job);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching job', error });
        }
    }
}

module.exports = new JobController();
