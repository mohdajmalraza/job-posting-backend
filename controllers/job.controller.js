const { createjob, fetchJobs } = require("../services/job.service");
const { validateJobData } = require("../validations/job.validation");

const addJob = async (req, res) => {
  const validationError = validateJobData(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const {
      title,
      companyName,
      salary,
      location,
      jobType,
      description,
      qualifications,
    } = req.body;

    const job = await createjob({
      title,
      companyName,
      salary,
      location,
      jobType,
      description,
      qualifications,
    });

    return res.status(201).json({
      message: "Job created successfully",
      job: {
        id: job._id,
        title: job.title,
        companyName: job.companyName,
        salary: job.salary,
        location: job.location,
        jobType: job.jobType,
        description: job.description,
        qualifications: job.qualifications,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await fetchJobs();

    if (!jobs.length) {
      return res.status(200).json({ message: "No jobs found", jobs: [] });
    }

    const formattedJobs = jobs.map(
      ({
        _id,
        title,
        companyName,
        salary,
        location,
        jobType,
        description,
        qualifications,
      }) => ({
        id: _id,
        title,
        companyName,
        salary,
        location,
        jobType,
        description,
        qualifications,
      }),
    );

    return res
      .status(200)
      .json({ message: "Jobs fetched successfully", jobs: formattedJobs });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addJob, getJobs };
