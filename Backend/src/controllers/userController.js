const User = require('../models/userModel');

class UserController {
    async applyJob(req, res) {
        
        const { name, email, phone, resume, coverLetter, skills, experience } = req.body;

        if (!name || !email || !phone || !resume) {
            return res.status(400).json({ message: 'Name, email, phone, and resume are required' });
        }

        try {

            const userDetail = new User({
                name: name,
                email: email,
                phone: phone,
                resume: resume,
                coverLetter: coverLetter,
                skills:skills,
                experience:experience
            });

            await userDetail.save();

            res.status(201).json({ message: 'Application submitted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error submitting application', error });
        }
    }

    async getApplicants(req, res) {
        try {
            const users = await User.find({});
            
            if (users.length === 0) {
                return res.status(404).json({ message: 'No applicants found' });
            }
            
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching applicants', error });
        }
    }
    
}

module.exports = new UserController();
