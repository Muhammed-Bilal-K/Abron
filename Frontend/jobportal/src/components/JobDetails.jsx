import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById, applyToJob } from "../api/admin";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await getJobById(jobId);
        setJob(response);
        navigate('/');
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchJob();
  }, [jobId]);

  const handleApply = async (event) => {
    event.preventDefault();

    const applicationData = {
      jobId,
      name,
      email,
      phone,
      resume,
      coverLetter,
      skills,
      experience,
    };

    try {
      const response = await applyToJob(applicationData);
      console.log(response);
    } catch (error) {
      console.error("Application failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      {job ? (
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl text-white mb-4">{job.title}</h1>
            <p className="text-gray-400 mb-2"><strong>Description:</strong> {job.description}</p>
            <p className="text-gray-400 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-400 mb-2"><strong>Location:</strong> {job.location}</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <form onSubmit={handleApply}>
              <div className="mb-4">
                <label className="block text-white">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Resume Link</label>
                <textarea
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  rows="1"
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-white">Cover Letter</label>
                <textarea
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  rows="1"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-white">Skills</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Experience</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-800 rounded"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
              >
                Apply
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default JobDetail;
