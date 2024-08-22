const express = require('express');
const UserController = require('../controllers/userController');
const AdminController = require('../controllers/adminController');
const JobController = require('../controllers/jobController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', AdminController.adminLogin);
router.get('/applicants', authMiddleware, UserController.getApplicants);
router.post('/jobs', authMiddleware, JobController.createJob);
router.get('/jobs', JobController.getJobs);
router.get('/jobs/:id', JobController.getJobById);

module.exports = router;
