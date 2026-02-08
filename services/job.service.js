const jobModel = require("../models/job.model.js");

async function createjob(data) {
  return await jobModel.create(data);
}

async function fetchJobs() {
  return await jobModel.find();
}

async function fetchJobById(id) {
  return await jobModel.findById(id);
}

async function deleteJob(id) {
  return await jobModel.findByIdAndDelete(id);
}

async function searchJobs(query) {
  return await jobModel.find({ title: { $regex: query, $options: "i" } });
}

module.exports = { createjob, fetchJobs, fetchJobById, deleteJob, searchJobs };
