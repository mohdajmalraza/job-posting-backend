const {
  createjob,
  fetchJobs,
  fetchJobById,
} = require("../services/job.service");
const {
  validateJobData,
  validateJobId,
} = require("../validations/job.validation");

const addJob = async (req, res) => {
  const validationError = validateJobData(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const {
      title,
      company,
      salary,
      location,
      type,
      description,
      qualifications,
    } = req.body;

    const job = await createjob({
      title,
      company,
      salary,
      location,
      type,
      description,
      qualifications,
    });

    return res.status(201).json({
      message: "Job created successfully",
      job: {
        id: job._id,
        title: job.title,
        company: job.company,
        salary: job.salary,
        location: job.location,
        type: job.type,
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
        company,
        salary,
        location,
        type,
        description,
        qualifications,
      }) => ({
        id: _id,
        title,
        company,
        salary,
        location,
        type,
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

const getJobById = async (req, res) => {
  const validationError = validateJobId(req.params);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const id = req.params.id;

    const job = await fetchJobById(id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    return res.status(200).json({
      message: "Job fetched successfully",
      job: {
        id: job._id,
        title: job.title,
        company: job.company,
        salary: job.salary,
        location: job.location,
        type: job.type,
        description: job.description,
        qualifications: job.qualifications,
      },
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addJob, getJobs, getJobById };
